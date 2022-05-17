import Container from 'components/Container';

import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Container>{children}</Container>
    </header>
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta property="og:type"   content="article" /> 
<meta property="og:url"    content="<?php the_permalink(); ?>" /> 
<meta property="og:title"  content="<?php the_title(); ?>" /> 
<meta property="og:description" content="<?php the_title();?>" />
<meta property="og:image" content="<?php if ( has_post_thumbnail() ) {  $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full', false, '' ); $thumbnailSrc = $src[0]; ?><?php echo  $thumbnailSrc; ?><?php } else { ?><?php $resim = get_post_meta($post->ID,'resim', true); if($resim != "") {  ?><? echo ($resim); ?><?php }else{ ?><?php } ?><?php }?>" />
<meta property="og:url" content="<?php the_permalink();?>" /> 
<meta property="og:site_name" content="animals-world.app/"/>
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="560" />
<meta property="og:image:height" content="292" />
<meta property="fb:admins" content="Admin"/>
<meta property="og:site_name" content="online news"/>
<meta property="article:published_time" content="<?php the_time('F j, Y'); ?>" />
<meta property="article:modified_time" content="<?php the_time('F j, Y'); ?>" />
<meta property="article:section" content="Article Section" />
<meta property="fb:admins" content="admin"/>
<meta property="og:type" content="video.other"/>
  );
};

export default Header;
