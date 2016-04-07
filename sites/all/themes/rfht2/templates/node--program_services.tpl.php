
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
	


	<?php
	$term=$node->field_category['und'][0]['taxonomy_term'];
	$term_name=$node->field_category['und'][0]['taxonomy_term']->name;
	 $category_tid = $term->tid; 	

	$nodequeue_nodes = nodequeue_load_nodes(2, FALSE, 0, 0);
	$subcategory_nodes = array();
	foreach ($nodequeue_nodes as $nodequeue_node) { 
		if ($nodequeue_node->field_category['und'][0]['tid'] == $category_tid) {
			$subcategory_nodes[] = $nodequeue_node;
			if ($nodequeue_node->nid == $node->nid) {
				$index = count($subcategory_nodes)-1;

				
			}
		}
	}
	


$url_parts = explode('/',request_uri());

	
	if (!function_exists('removeUrlSpace')) {
	function removeUrlSpace($string) {
	    //Lower case everything
	    $string = strtolower($string);
	    //Convert whitespaces and underscore to dash
	    $string = preg_replace("/[\s_]/", "-", $string);
	    $string=str_replace('with-','',$string);
	    return $string;
	}
}
	$max=count($subcategory_nodes);
	

	$currentTitle=removeUrlSpace($node->title);

 	if($max>=2){

	if ($index == 0)
	{	
		$str_next = $subcategory_nodes[$index+1]->title;
		$next_path = $subcategory_nodes[$index+1]->nid;
		$next_path = drupal_lookup_path('alias',"node/".$next_path);
	}
	else if($index==$max-1)
	{
		$str_prev = $subcategory_nodes[$max-2]->title;
		$prev_path = $subcategory_nodes[$index-1]->nid;
		$prev_path = drupal_lookup_path('alias',"node/".$prev_path);
	}
	else
	{	
	    $str_next = $subcategory_nodes[$index+1]->title;
		$next_path = $subcategory_nodes[$index+1]->nid;
		$next_path = drupal_lookup_path('alias',"node/".$next_path);
	    $str_prev=$subcategory_nodes[$index-1]->title;
		$prev_path = $subcategory_nodes[$index-1]->nid;
		$prev_path = drupal_lookup_path('alias',"node/".$prev_path);
	}
	?>
	
	<div id="services-nav">
		
		<?php if($index>0) { ?>
		<a href="/<?php echo $prev_path ?>" class="prev"><span>Previous</span><br><?php echo $str_prev ?></a>
		<?php }?>
		<?php if($index<$max-1){?>
		<a href="/<?php echo $next_path ?>" class="next"><span>Next</span><br><?php echo $str_next ?></a>
		<?php }?>
	</div>
	<?php }?>
	<?php
		echo render($content); 
	?>

</div>

