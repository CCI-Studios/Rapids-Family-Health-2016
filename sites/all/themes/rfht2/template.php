<?php

/**
 * Preprocess function for Date pager template.
 */
function rfht2_preprocess_date_views_pager(&$vars) {
  ctools_add_css('date_views', 'date_views');

  $plugin = $vars['plugin'];
  $input = $vars['input'];
  $view = $plugin->view;

  $vars['nav_title'] = '';
  $vars['next_url'] = '';
  $vars['prev_url'] = '';

  if (empty($view->date_info) || empty($view->date_info->min_date)) {
    return;
  }
  $date_info = $view->date_info;
  // Make sure we have some sort of granularity.
  $granularity = !empty($date_info->granularity) ? $date_info->granularity : 'month';
  $pos = $date_info->date_arg_pos;
  if (!empty($input)) {
    $id = $plugin->options['date_id'];
    if (array_key_exists($id, $input) && !empty($input[$id])) {
      $view->args[$pos] = $input[$id];
    }
  }

  $next_args = $view->args;
  $prev_args = $view->args;
  $min_date = $date_info->min_date;
  $max_date = $date_info->max_date;

  // Set up the pager link format. Setting the block identifier
  // will force pager style links.
  if ((isset($date_info->date_pager_format) && $date_info->date_pager_format != 'clean') || !empty($date_info->mini)) {
    if (empty($date_info->block_identifier)) {
      $date_info->block_identifier = $date_info->pager_id;
    }
  }

  if (empty($date_info->hide_nav)) {
    $prev_date = clone($min_date);
    date_modify($prev_date, '-1 ' . $granularity);
    $next_date = clone($min_date);
    date_modify($next_date, '+1 ' . $granularity);
    $format = array('year' => 'Y', 'month' => 'Y-m', 'day' => 'Y-m-d');
    switch ($granularity) {
      case 'week':
        $next_week = date_week(date_format($next_date, 'Y-m-d'));
        $prev_week = date_week(date_format($prev_date, 'Y-m-d'));
        $next_arg = date_format($next_date, 'Y-\W') . date_pad($next_week);
        $prev_arg = date_format($prev_date, 'Y-\W') . date_pad($prev_week);
        break;
      default:
        $next_arg = date_format($next_date, $format[$granularity]);
        $prev_arg = date_format($prev_date, $format[$granularity]);
    }
    $next_path = str_replace($date_info->date_arg, $next_arg, $date_info->url);
    $prev_path = str_replace($date_info->date_arg, $prev_arg, $date_info->url);
    $next_args[$pos] = $next_arg;
    $prev_args[$pos] = $prev_arg;
    $vars['next_url'] = date_pager_url($view, NULL, $next_arg);
    $vars['prev_url'] = date_pager_url($view, NULL, $prev_arg);
    $vars['next_options'] = $vars['prev_options'] = array();
  }
  else {
    $next_path = '';
    $prev_path = '';
    $vars['next_url'] = '';
    $vars['prev_url'] = '';
    $vars['next_options'] = $vars['prev_options'] = array();
  }

  // Check whether navigation links would point to
  // a date outside the allowed range.
  if (!empty($next_date) && !empty($vars['next_url']) && date_format($next_date, 'Y') > $date_info->limit[1]) {
    $vars['next_url'] = '';
  }
  if (!empty($prev_date) && !empty($vars['prev_url']) && date_format($prev_date, 'Y') < $date_info->limit[0]) {
    $vars['prev_url'] = '';
  }
  $vars['prev_options'] += array('attributes' => array());
  $vars['next_options'] += array('attributes' => array());
  $prev_title = '';
  $next_title = '';

  // Build next/prev link titles.
  switch ($granularity) {
    case 'year':
      $prev_title = t('Navigate to previous year');
      $next_title = t('Navigate to next year');
      break;
    case 'month':
      $prev_title = t('Navigate to previous month');
      $next_title = t('Navigate to next month');
      break;
    case 'week':
      $prev_title = t('Navigate to previous week');
      $next_title = t('Navigate to next week');
      break;
    case 'day':
      $prev_title = t('Navigate to previous day');
      $next_title = t('Navigate to next day');
      break;
  }
  $vars['prev_options']['attributes'] += array('title' => $prev_title);
  $vars['next_options']['attributes'] += array('title' => $next_title);

  // Add nofollow for next/prev links.
  $vars['prev_options']['attributes'] += array('rel' => 'nofollow');
  $vars['next_options']['attributes'] += array('rel' => 'nofollow');

  // Need this so we can use '&laquo;' or images in the links.
  $vars['prev_options'] += array('html' => TRUE);
  $vars['next_options'] += array('html' => TRUE);

  $link = FALSE;
  // Month navigation titles are used as links in the block view.
  if (!empty($date_info->mini) && $granularity == 'month') {
    $link = TRUE;
  }
  $params = array(
    'granularity' => $granularity,
    'view' => $view,
    'link' => $link,
  );
  $nav_title = theme('date_nav_title', $params);
  $vars['nav_title'] = $nav_title;
  $vars['mini'] = !empty($date_info->mini);
  
  // Get the date information from the view.
  $date_info = $view->date_info;

  // Choose the dislpay format of the month name.
  $format = 'F';

  // Get the previous month.
  $dateString = $date_info->min_date;
  $prev_month = new DateTime($dateString);
  $prev_month->modify('-1 month');
  $prev_pager_title = format_date($prev_month->getTimestamp(), 'custom', $format);
  $vars['prev_title'] = $prev_pager_title;

  // Get the next month.
  $next_month = new DateTime($dateString);
  $next_month->modify('+1 month');
  $next_pager_title = format_date($next_month->getTimestamp(), 'custom', $format);
  $vars['next_title'] = $next_pager_title;
}
