<!-- Latest News -->
{if isset($view_data) AND !empty($view_data)}
    {assign var='i' value=1}
<section id="dorhomeStyle2" class="blog-home-data">
    <div class="container theme-container">
        <div class="gst-column">
            <div class="fancy-heading text-center">
                <h2><span>{l s="Recent Blog & News" mod="smartbloghomelatestnews"}</span></h2>
            </div>
            <div class="gst-post-list row">
                {foreach from=$view_data item=post key=i}
                {assign var="catOptions" value=null}
                {assign var="options" value=null}
                {$options.id_post = $post.id}
                {$options.slug = $post.link_rewrite}
                {$catOptions.id_category = $post.category}
                {$catOptions.slug = $post.category_link_rewrite}
                <div class="main-item-blog">
                    <div class="image-blog-item">
                        <a href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}">
                            <img src="{$post.thumb_image}" alt="" />
                        </a>
                    </div>
                    <div class="info-blog-item">
                        <div class="entry-meta">
                            <div class="entry-time meta-date">
                                <time datetime="2015-12-09T21:10:20+00:00">
                                    <span class="entry-time-date dblock">{$post.date_added|date_format:"%B %d, %Y"}</span>
                                </time>
                            </div>
                        </div>
                        <div class="media-body clearfix">
                            <div class="entry-header">
                                <h3 class="entry-title">
                                    <a href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" title="{$post.title}">{$post.title|truncate:50:'...'|escape:'htmlall':'UTF-8'}</a>
                                </h3>
                                <p class="news-desc">{$post.short_description|truncate:120:'...'|escape:'htmlall':'UTF-8'}</p>
                                <a href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" class="read-more-link thm-clr">{l s="Read More" mod="smartbloghomelatestnews"}<i class="fa fa-long-arrow-right hidden"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/foreach}
            </div>
        </div>
    </div>
</section>
{/if}
<!-- Latest News -->