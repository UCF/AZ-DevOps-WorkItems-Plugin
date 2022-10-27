<?php 
	global $wpdb;
	
	
	$sql = "DROP TABLE " . $wpdb->base_prefix . "ucf_devops_main;";
	$wpdb->query($sql);
	$wpdb->show_errors();
	$wpdb->flush();
	
		
	$sql = "DROP TABLE " . $wpdb->base_prefix . "ucf_devops_setup;";
	$wpdb->query($sql);
	$wpdb->show_errors();
	$wpdb->flush();


	remove_shortcode ('wp_devops_resolved');
	remove_shortcode ('wp_devops_current_sprint');
	
	
	
	remove_menu_page( 'ucf_devops_rest_main_menu'); 

?>
