CREATE TABLE IF NOT EXISTS `PREFIX_dorwishlist` (
  `id_dorwishlist` int(10) unsigned NOT NULL auto_increment,
  `id_customer` int(10) unsigned NOT NULL,
  `token` varchar(64) character set utf8 NOT NULL,
  `name` varchar(64) character set utf8 NOT NULL,
  `counter` int(10) unsigned NULL,
  `id_shop` int(10) unsigned default 1,
  `id_shop_group` int(10) unsigned default 1,
  `date_add` datetime NOT NULL,
  `date_upd` datetime NOT NULL,
  `default` int(10) unsigned default 0,
  PRIMARY KEY  (`id_dorwishlist`)
) ENGINE=ENGINE_TYPE DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `PREFIX_dorwishlist_email` (
  `id_dorwishlist` int(10) unsigned NOT NULL,
  `email` varchar(128) character set utf8 NOT NULL,
  `date_add` datetime NOT NULL
) ENGINE=ENGINE_TYPE DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `PREFIX_dorwishlist_product` (
  `id_dorwishlist_product` int(10) NOT NULL auto_increment,
  `id_dorwishlist` int(10) unsigned NOT NULL,
  `id_product` int(10) unsigned NOT NULL,
  `id_product_attribute` int(10) unsigned NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`id_dorwishlist_product`)
) ENGINE=ENGINE_TYPE  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `PREFIX_dorwishlist_product_cart` (
  `id_dorwishlist_product` int(10) unsigned NOT NULL,
  `id_cart` int(10) unsigned NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `date_add` datetime NOT NULL
) ENGINE=ENGINE_TYPE DEFAULT CHARSET=utf8;
