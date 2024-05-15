BEGIN;
INSERT INTO public.administrateur (id,"type",reference,name,description,locale,"options","data",start_at,end_at,expired_at,suspended_at,closed_at,deleted_at,created_at,updated_at) VALUES
	 ('db4e597f-c64d-4cda-af78-02fd44400001','association','bleme','Bleme Inc','{}','{}','{}','{}','2022-12-14 06:31:40.631',NULL,NULL,NULL,NULL,NULL,'2022-12-14 06:31:40.631','2022-12-14 06:31:40.631'),
	 ('db4e597f-c64d-4cda-af78-02fd44400003','association','ait-oussalah','Ait oussalah','{}','{}','{}','{}','2022-12-14 06:31:40.631',NULL,NULL,NULL,NULL,NULL,'2022-12-14 06:31:40.631','2022-12-14 06:31:40.631'),
	 ('db4e597f-c64d-4cda-af78-02fd44400002','association','iheggaren','Iheggaren','{}','{}','{}','{"logo": {"url": "logo.png", "style": {"width": "70px"}}}','2022-12-14 06:31:40.631',NULL,NULL,NULL,NULL,NULL,'2022-12-14 06:31:40.631','2022-12-14 06:31:40.631'),
	 ('db4e597f-c64d-4cda-af78-02fd44400004','association','ihamiyen','Ihamiyen','{}','{}','{}','{"logo": {"url": "alpha2.png", "style": {"width": "30px", "marginLeft": "7px"}}}','2022-12-14 06:31:40.631',NULL,NULL,NULL,NULL,NULL,'2022-12-14 06:31:40.631','2022-12-14 06:31:40.631');
INSERT INTO public.seats (id,organization_id,reference,name,description,locale,"options","data",start_at,closed_at,deleted_at,created_at,updated_at) VALUES
	 ('db4e597f-c64d-4cda-af78-02fd444d0001','db4e597f-c64d-4cda-af78-02fd44400002','001','Paris','hello from paris','{}','{}','{}',NULL,NULL,NULL,'2022-12-15 04:42:28.475','2022-12-15 04:42:28.475'),
	 ('db4e597f-c64d-4cda-af78-02fd444d0002','db4e597f-c64d-4cda-af78-02fd44400002','002','Bejaia','hello from iheggaren','{}','{}','{}',NULL,NULL,NULL,'2022-12-15 04:42:28.475','2022-12-15 04:42:28.475'),
	 ('db4e597f-c64d-4cda-af78-02fd444d0003','db4e597f-c64d-4cda-af78-02fd44400002','003','Lyon','hello from paris','{}','{}','{}',NULL,NULL,NULL,'2022-12-15 04:42:28.475','2022-12-15 04:42:28.475'),
	 ('db4e597f-c64d-4cda-af78-02fd444d0004','db4e597f-c64d-4cda-af78-02fd44400003','004','Paris','hello from paris','{}','{}','{}',NULL,NULL,NULL,'2022-12-15 04:42:28.475','2022-12-15 04:42:28.475'),
	 ('db4e597f-c64d-4cda-af78-02fd444d0005','db4e597f-c64d-4cda-af78-02fd44400001','005','Paris','hello from paris','{}','{}','{}',NULL,NULL,NULL,'2022-12-15 04:42:28.475','2022-12-15 04:42:28.475');
INSERT INTO public.accounts (id,firstname,lastname,birthday,email,login,"password",locale,"options","data",verified_at,suspended_at,closed_at,deleted_at,created_at,updated_at) VALUES
	 ('c536bc92-e164-4967-8113-5e1f352e9212','Kamal','Mehdi',NULL,'kamal.mehdi.per@gmail.com','Kamal','$argon2id$v=19$m=65536,t=3,p=4$AfvhQLfkhpJAQZF1fvxiyQ$lgLnp1lsHuvCpIeMEC9E6A+ACBn1U/WN0S/853zYxHg','fr-FR','{}','{}',NULL,NULL,NULL,NULL,'2022-12-18 05:16:17.164','2022-12-18 05:16:17.164'),
	 ('6505303b-5da4-4ae0-b051-7d8eaf044b21','Ali','Mekbiche',NULL,'mekbiche.ali@gmail.com','Ali','$argon2id$v=19$m=65536,t=3,p=4$kiwnO4pucx61+4qo4j3VrQ$z4Gd9rX1V7t+69jETNK639uy5UdJOf81EVqCKXh4wRI','fr-FR','{}','{}',NULL,NULL,NULL,NULL,'2022-12-18 05:17:07.994','2022-12-18 05:17:07.994'),
	 ('179041b7-3da0-4a62-8682-22bc3e8e8a36','Mohamed','Mekbiche',NULL,'mekbiche.mohamed@gmail.com','Mohamed','$argon2id$v=19$m=65536,t=3,p=4$KLY0IyecsUxrjYu6zLZJzw$GQh/JhZ/f/7yyYFsBNjEadyke+4YZyA5GtS0ExjVles','fr-FR','{}','{}',NULL,NULL,NULL,NULL,'2022-12-18 05:17:35.453','2022-12-18 05:17:35.453');
INSERT INTO public.members (id,account_id,seat_id,code,status,"options","data",sponsored_by,start_at,end_at,expired_at,suspended_at,closed_at,deleted_at,created_at,updated_at) VALUES
	 ('97fdb4e5-4dc6-da4c-78af-44d000000001','c536bc92-e164-4967-8113-5e1f352e9212','db4e597f-c64d-4cda-af78-02fd444d0001','E87M87B','new','{}','{}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-17 01:20:27.919','2022-12-17 01:20:27.919'),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000002','6505303b-5da4-4ae0-b051-7d8eaf044b21','db4e597f-c64d-4cda-af78-02fd444d0001','HG52MZ5','new','{}','{}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-17 01:20:27.919','2022-12-17 01:20:27.919'),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000003','179041b7-3da0-4a62-8682-22bc3e8e8a36','db4e597f-c64d-4cda-af78-02fd444d0001','F65T32L','new','{}','{}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-17 01:20:27.919','2022-12-17 01:20:27.919');
INSERT INTO public.covers (id,created_by,organization_id,image,target,"options","data",created_at,updated_at,deleted_at) VALUES
	 ('97fdb4e5-4dc6-da4c-78af-44d000000001','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','IMGP2468 17.12.31.JPG','{"link": "/adhesion", "caption": "Adhesion", "content": "L''association d''iheggaren vous <br/> souhaite la bienvenue"}','{"css": {}, "requireAuth": true}','{}','2021-09-21 07:54:23.264','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000002','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','village ihaggarene 051 17.12.30.JPG','{"link": "/profile", "caption": "Histoire", "content": "Place Tadjemaath<br/>Lieu de rencontres et rassemblements"}','{"css": {}, "requireAuth": true}','{}','2021-09-19 18:18:03.957','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000003','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','271 17.12.30.JPG','{"link": "https://google.com", "caption": "Culture", "content": "Anciens quartiers<br/>maisons traditionnelles kabyle"}','{"requireAuth": true}','{}','2021-09-19 18:18:03.957','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000004','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://www.apqc.org/sites/default/files/inline-images/shutterstock_1200694369_0.jpg','{"link": "https://google.com", "caption": "Agir pour l''environnement", "content": "Iheggaren & l''enveronnement<br/>Cause commune"}','{"css": {"backgroundSize": "contain", "backgroundColor": "white"}}','{}','2021-09-19 18:18:03.957','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000005','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://www.westmoreland-county.org/sites/default/files/2020-03/coronavirus_0.jpg','{"link": "https://google.com", "caption": "m''informer", "content": "Des difficultés liées au covid-19 ?<br/>l''association vous aide"}','{"css": {}}','{}','2021-09-19 18:17:46.352','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000006','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://u-paris.fr/wp-content/uploads/2019/03/elections.jpg','{"content": "Election des membres du bureau<br/>Votre avis est important"}','{}','{}','2021-09-19 18:18:03.957','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000007','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://collegeofeventmanagement.edu.au/wp-content/uploads/2017/01/Orientation_1.jpg','{"link": "https://google.com", "caption": "Participer", "content": "Evenement de fin d''année<br/>Rejoinez nous, plusieurs artistes sont invités"}','{"css": {}}','{}','2021-09-19 18:18:03.957','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000008','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://wallpaperaccess.com/full/1682869.png','{"link": "https://google.com", "caption": "Contactez nous", "content": "Des questions sur l''organisation,<br/>projets, activités ... de l''association ?"}','{"css": {"backgroundSize": "contain", "backgroundColor": "black"}}','{}','2021-09-19 18:18:07','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000009','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','ihamiyene 17.12.30.JPG','{}','{}','{}','2021-09-19 18:18:07.111','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000010','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://www.10wallpaper.com/wallpaper/2560x1600/1207/Decay_Rate-Nature_Landscape_Wallpaper_2560x1600.jpg','{}','{}','{}','2021-09-19 18:17:59.516','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000011','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://www.10wallpaper.com/wallpaper/1366x768/1207/swiss_night_sky-Nature_Landscape_Wallpaper_1366x768.jpg','{}','{}','{}','2021-09-19 18:18:07.111','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000012','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://ix-www.imgix.net/hp/snowshoe.jpg','{}','{}','{}','2021-09-21 07:54:23.264','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000013','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://www.10wallpaper.com/wallpaper/1366x768/1808/Spring_pear_tree_sprouting_white_flowers_photo_1366x768.jpg','{}','{}','{}','2021-09-19 18:18:07','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000014','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://live.staticflickr.com/2448/3754608666_b56bbf3d18_b.jpg','{"link": "/pot/1827b7e9-8a3b-2873-7222-a9d89b152531", "caption": "faire un don", "content": "Ensemble nous sommes plus fort !!"}','{"css": {"alignItemsz": "flex-start", "backgroundPosition": "right center"}, "requireAuth": true}','{}','2021-09-21 07:54:23.264','2022-12-19 01:49:39.186',NULL),
	 ('97fdb4e5-4dc6-da4c-78af-44d000000015','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','https://ix-www.imgix.net/hp/snowshoe.jpg','{}','{}','{}','2021-09-21 07:54:23.264','2022-12-19 01:49:39.186',NULL);
INSERT INTO public.menus (id,parent_id,created_by,organization_id,title,"position","type",category,target,"options","data",deleted_at,created_at,updated_at) VALUES
	 ('db4e597f-c64d-4cda-af78-02fd44400014','db4e597f-c64d-4cda-af78-02fd44400003',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','France',2,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400007','db4e597f-c64d-4cda-af78-02fd44400004',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Réglements',1,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400008','db4e597f-c64d-4cda-af78-02fd44400004',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Découvrir',2,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400006','db4e597f-c64d-4cda-af78-02fd44400004',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Devenir membre',3,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400016','db4e597f-c64d-4cda-af78-02fd44400015',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Election du bureau',1,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400017','db4e597f-c64d-4cda-af78-02fd44400015',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Election du groupe culture',2,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400018','db4e597f-c64d-4cda-af78-02fd44400015',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Election du groupe histoire',3,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400019','db4e597f-c64d-4cda-af78-02fd44400015',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Choix des projets',4,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400020',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Accueil',0,'LINK','main','{"url": "/"}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400001',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Présentation',1,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400004',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Adhésion',2,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400002',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Activités',3,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400003',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Nos projets',4,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400015',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Elections',5,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400009',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Donation',6,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400005',NULL,NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Evenements',7,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400011','db4e597f-c64d-4cda-af78-02fd44400009',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Projet d''eau',1,'LINK','main','{"url": "/pot/9765e9b7-a38b-9821-9932-d8319b1a9525"}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400012','db4e597f-c64d-4cda-af78-02fd44400009',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Incendies ihegarren',2,'LINK','main','{"url": "/pot/b7e91827-3b8a-14e6-8172-9ba92531d815"}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400010','db4e597f-c64d-4cda-af78-02fd44400009',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Donation iheggaren',3,'LINK','main','{"url": "/pot/1827b7e9-8a3b-2873-7222-a9d89b152531"}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92'),
	 ('db4e597f-c64d-4cda-af78-02fd44400013','db4e597f-c64d-4cda-af78-02fd44400003',NULL,'db4e597f-c64d-4cda-af78-02fd44400002','Iheggaren',1,'LINK','main','{}','{}','{}',NULL,'2022-11-09 15:21:15.15','2022-12-18 15:36:05.92');
INSERT INTO public.pages (id,created_by,organization_id,slug,title,home,order_by,"options","data",start_at,end_at,suspended_at,deleted_at,created_at,updated_at) VALUES
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','hello-page','Hello page',NULL,'date','{}','{}',NULL,NULL,NULL,NULL,'2022-12-19 02:01:47.186','2022-12-19 02:01:47.186'),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','the-page','The page',NULL,'date','{}','{}',NULL,NULL,NULL,NULL,'2022-12-19 02:01:47.186','2022-12-19 02:01:47.186');
INSERT INTO public.publications (id,created_by,organization_id,slug,title,content_id,content_type,"options","data",start_at,end_at,deleted_at,created_at,updated_at) VALUES
	 ('db4e597f-c64d-4cda-af78-02fd44400004','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','publication','Noel 2022','c64d4cda-c64d-4cda-af78-db4e597f0004','documents','{}','{}',NULL,NULL,NULL,'2022-12-19 05:44:50.623','2022-12-19 05:44:50.623'),
	 ('db4e597f-c64d-4cda-af78-02fd44400005','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','publication2','RAmadan 2022','c64d4cda-0000-4cda-0000-db4e597f0001','events','{}','{}',NULL,NULL,NULL,'2022-12-19 05:44:50.623','2022-12-19 05:44:50.623');
INSERT INTO public.pages_covers (id,page_id,cover_id,"position","options","data",start_at,end_at,created_at,updated_at,deleted_at) VALUES
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50001','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000001',1,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50002','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000002',2,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50003','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000003',3,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50004','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000004',4,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50005','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000005',5,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50006','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000006',6,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50007','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000007',7,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50008','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000008',8,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50014','b4e597fd-c64d-4cda-af78-97fdb4e50004','97fdb4e5-4dc6-da4c-78af-44d000000014',14,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50009','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000009',9,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50010','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000010',10,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50011','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000011',11,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50012','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000012',12,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50013','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000013',13,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL),
	 ('b4e597fd-c64d-4cda-af78-97fdb4e50015','b4e597fd-c64d-4cda-af78-97fdb4e50001','97fdb4e5-4dc6-da4c-78af-44d000000015',15,'{}','{}',NULL,NULL,'2022-12-19 02:06:56.632','2022-12-19 02:06:56.632',NULL);
INSERT INTO public.pages_publications (id,page_id,publication_id,"position","data",start_at,end_at,deleted_at,pined_at,created_at,updated_at) VALUES
	 ('db4e597f-c64d-4cda-af78-02fd44400004','b4e597fd-c64d-4cda-af78-97fdb4e50004','db4e597f-c64d-4cda-af78-02fd44400004',1,'{}',NULL,NULL,NULL,'2022-12-19 06:53:16.335','2022-12-19 06:53:16.335','2022-12-19 06:53:16.335'),
	 ('db4e597f-c64d-4cda-af78-02fd44400099','b4e597fd-c64d-4cda-af78-97fdb4e50004','db4e597f-c64d-4cda-af78-02fd44400005',1,'{}',NULL,NULL,NULL,'2022-12-19 06:53:16.335','2022-12-19 06:53:16.335','2022-12-19 06:53:16.335');
INSERT INTO public.prices (id,model,model_id,value,title,"comment","options","data",start_at,end_at,deleted_at,created_at,updated_at) VALUES
	 ('00000001-3b8a-14e6-8172-9ba92531d815','wallet','b7e91827-3b8a-14e6-8172-9ba92531d815','{"price": 1000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000003-3b8a-14e6-8172-9ba92531d815','wallet','b7e91827-3b8a-14e6-8172-9ba92531d815','{"price": 3000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000004-3b8a-14e6-8172-9ba92531d815','wallet','b7e91827-3b8a-14e6-8172-9ba92531d815','{"price": 5000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000005-3b8a-14e6-8172-9ba92531d815','wallet','b7e91827-3b8a-14e6-8172-9ba92531d815','{"price": 10000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000002-3b8a-14e6-8172-9ba92531d815','wallet','b7e91827-3b8a-14e6-8172-9ba92531d815','{"price": 2000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000004-3b8a-14e6-8172-9ba92531d816','wallet','9765e9b7-a38b-9821-9932-d8319b1a9525','{"price": 5000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000005-3b8a-14e6-8172-9ba92531d816','wallet','9765e9b7-a38b-9821-9932-d8319b1a9525','{"price": 10000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000001-3b8a-14e6-8172-9ba92531d816','wallet','9765e9b7-a38b-9821-9932-d8319b1a9525','{"price": 500, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000002-3b8a-14e6-8172-9ba92531d816','wallet','9765e9b7-a38b-9821-9932-d8319b1a9525','{"price": 1000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000003-3b8a-14e6-8172-9ba92531d816','wallet','9765e9b7-a38b-9821-9932-d8319b1a9525','{"price": 2000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000001-3b8a-14e6-8172-9ba92531d817','wallet','1827b7e9-8a3b-2873-7222-a9d89b152531','{"price": 1000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000002-3b8a-14e6-8172-9ba92531d817','wallet','1827b7e9-8a3b-2873-7222-a9d89b152531','{"price": 2000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000003-3b8a-14e6-8172-9ba92531d817','wallet','1827b7e9-8a3b-2873-7222-a9d89b152531','{"price": 3000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000004-3b8a-14e6-8172-9ba92531d817','wallet','1827b7e9-8a3b-2873-7222-a9d89b152531','{"price": 5000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261'),
	 ('00000005-3b8a-14e6-8172-9ba92531d817','wallet','1827b7e9-8a3b-2873-7222-a9d89b152531','{"price": 10000, "currency": "eur"}',NULL,NULL,'{}','{}',NULL,NULL,NULL,'2022-11-26 19:27:45.664','2022-12-19 16:19:19.261');
INSERT INTO public.wallets (id,created_by,organization_id,title,description,"options","data",start_at,end_at,deleted_at,created_at,updated_at) VALUES
	 ('9765e9b7-a38b-9821-9932-d8319b1a9525','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','Projet d''eau','Bonjour à tous,<br/>
<p>Comme vous avez pu le voir des incendies ravageurs ont touchés Iheggaren et ses hauteurs. Faisant plusieurs pertes materiels.
Plusieurs familles se retrouvent sans toits, sans ressources, il ne leur reste plus rien de ce drame. Depuis 8 mois nous vivons dans un contexte de crise sanitaire et de confinement les empêchant de travailler et subvenir à leurs besoins, aujourd''hui et plus que jamais cet incendie nous rappelle qu''ils ont encore plus besoin de nous !!!!
</p>
<img src="https://static.lexpress.fr/medias_11942/w_1973,h_1104,c_crop,x_0,y_10/w_968,h_545,c_fill,g_north/v1539338367/l-eau-en-bouteille-un-desastre-ecologique_6114318.jpg" alt="Girl in a jacket" width="100%">
<p>
Cette cagnotte sera remise à une employée sociale à l''auberge de Iheggaren, et distribuée aux victimes des incendies, plus particulièrement aux populations vivants dans les hauteurs de Iheggaren.
Merci à tous partagez partagez partagez au max !!!!!
</p>','{}','{}',NULL,NULL,NULL,'2022-11-26 19:23:50.193','2022-12-19 14:16:31.177'),
	 ('1827b7e9-8a3b-2873-7222-a9d89b152531','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','Don Amrabet Said','Bonjour à tous,<br/>
<p>Comme vous avez pu le voir des incendies ravageurs ont touchés Iheggaren et ses hauteurs. Faisant plusieurs pertes materiels.
Plusieurs familles se retrouvent sans toits, sans ressources, il ne leur reste plus rien de ce drame. Depuis 8 mois nous vivons dans un contexte de crise sanitaire et de confinement les empêchant de travailler et subvenir à leurs besoins, aujourd''hui et plus que jamais cet incendie nous rappelle qu''ils ont encore plus besoin de nous !!!!
</p>
<img src="/public/images/IMGP2468 17.12.31.JPG" alt="Girl in a jacket" width="100%">
<p>
Cette cagnotte sera remise à une employée sociale à l''auberge de Iheggaren, et distribuée aux victimes des incendies, plus particulièrement aux populations vivants dans les hauteurs de Iheggaren.
Merci à tous partagez partagez partagez au max !!!!!
</p>','{}','{}',NULL,NULL,NULL,'2022-11-26 19:23:50.193','2022-12-19 14:16:31.177'),
	 ('b7e91827-3b8a-14e6-8172-9ba92531d815','97fdb4e5-4dc6-da4c-78af-44d000000001','db4e597f-c64d-4cda-af78-02fd44400002','Incendies','Bonjour à tous,<br/>
<p>Comme vous avez pu le voir des incendies ravageurs ont touchés Iheggaren et ses hauteurs. Faisant plusieurs pertes materiels.
Plusieurs familles se retrouvent sans toits, sans ressources, il ne leur reste plus rien de ce drame. Depuis 8 mois nous vivons dans un contexte de crise sanitaire et de confinement les empêchant de travailler et subvenir à leurs besoins, aujourd''hui et plus que jamais cet incendie nous rappelle qu''ils ont encore plus besoin de nous !!!!
</p>
<img src="https://images.rtl.fr/~c/1155v769/rtl/www/1441290-un-incendie-illustration.jpg" alt="Girl in a jacket" width="100%">
<p>
Cette cagnotte sera remise à une employée sociale à l''auberge de Iheggaren, et distribuée aux victimes des incendies, plus particulièrement aux populations vivants dans les hauteurs de Iheggaren.
Merci à tous partagez partagez partagez au max !!!!!
</p>','{}','{}',NULL,NULL,NULL,'2022-11-26 19:23:50.193','2022-12-19 14:16:31.177');
INSERT INTO public.documents (id,publication_id,title,"content","options","data",deleted_at,created_at,updated_at) VALUES
	 ('c64d4cda-c64d-4cda-af78-db4e597f0004','db4e597f-c64d-4cda-af78-02fd44400004','Déclaration','<p>
Qui n''a pas entendu dire au moins une fois combien « il est triste de se retrouver uniquement à l''occasion d''un enterrement ? ».
Depuis le 16 juin 2001, date à laquelle quatre  jeunes issus de la famille « Ihaggarene » avaient organisé une fête inédite qui avait largement ravi les participants, aucune initiative similaire n''a malheureusement vu le jour. Le manque  d''organisation, de structure de communication, ainsi que l''éparpillement de bon nombre d''entre nous à travers le territoire national, sont autant de facteurs ayant défavorisé les relations entre nos familles et encore plus les rassemblements. Nous étions loin, alors, d''imaginer que cette initiative serait le fondement d''un élan constructif qui verrait le jour seulement vingt ans après. Néanmoins, pendant tout ce temps, chacun d''entre nous a vécu ce manque comme une fatalité.
</p>
<img src="/public/images/IMGP2468 17.12.31.JPG" alt="Girl in a jacket" width="100%">
<p>
Nous avons bravé cette « fatalité » au printemps 2019, alors qu''une fois de plus, nous accompagnions un de nos parents jusqu''à sa dernière demeure.
</p>
<p>
Dès lors, une série de contacts téléphoniques se mit en place durant plus d''une année avec la seule volonté de rassembler  les familles en des circonstances plus joyeuses.
La première réunion constitutive  vit le jour à Dreux le 18 Août 2020.
</p>
<p>
Durant près de quatre mois, nous n''avons cessé de nous réunir pour échanger sur les orientations à prendre afin de mettre en place cette organisation.
A l''unanimité, les membres fondateurs présents ont décidé de créer une association loi 1901 dont l''objectif principal est de renouer le lien entre nos familles, et de perpétuer la mémoire de nos anciens auprès des générations futures.
Ainsi est née :
</p>
<h4>« Les Enfants d''Ihaggarene »</h4>
<p style="text-align: center">
<br/>
  Comme le dit si bien le proverbe kabyle :
  <br />
  <b>« Tagmats, Ur thets nuz, Ur thets war''hane. »</b>
  <br />
  <i style="color: #777777">« La famille, Ne peut être ni vendue, ni mise en gage. »</i>
</p>','{}','{}',NULL,'2022-12-19 05:44:29.484','2022-12-19 05:44:29.484');
INSERT INTO public.events (id,publication_id,title,"content","options","data",start_at,end_at,deleted_at,created_at,updated_at) VALUES
	 ('c64d4cda-0000-4cda-0000-db4e597f0001','db4e597f-c64d-4cda-af78-02fd44400004','Le titre event','<p>
On a pris l''habitude d''organiser un « Secret Santa ». L''idée consiste à acheter un cadeau de Noël sans savoir à qui il sera offert. On établit un budget (5 € par exemple), un thème (écolo, geek, couleur… laissez aller votre imagination) et une date de remise des cadeaux. Le jour J, lors d''un repas d''équipe, chacun choisit à tour de rôle un cadeau et essaye de deviner qui en est l''auteur. Bonne humeur garantie ! En période d''épidémie, vous pouvez remplacer le repas d''équipe au resto en déposant discrètement le cadeau sur le bureau du collègue destinataire. Et pour plus de fun, on peut lui laisser un petit mot anonyme lui donnant quelques indices sur votre identité 🙂
Osez la déco
</p><p>
Bon ok, on avoue : cette idée n''est pas la plus originale. Mais de vous à nous, c''est quand même kiffant d''installer ces petites guirlandes, sapins, boules, non ? Et pour l''avoir testé, un concours de déco de bureau (le plus kitsch/beau au choix…) peut mettre de la couleur et de la gaité dans les sombres journées de décembre.
Organisez un petit déj détox
</p><p>
Je ne sais pas pour vous mais chez Bruneau, en décembre, on frôle vite la crise de foie ! Pour fêter le début de l''année, pourquoi ne pas organiser un petit-déjeuner 100 % santé ? Au menu : smoothies, brochettes de fruits frais et mini pancakes. Vos collègues (et votre corps) vous remercieront. Le bon réflexe anti-contamination : désigner une personne qui fera le service auprès des collègues après s''être bien entendu laver les mains.
Déclenchez un élan de solidarité
</p><p>
La fin de l''année est l''occasion aussi de penser aux plus démunis et de permettre aux collaborateurs de votre entreprise de faire une bonne action. Celle-ci peut prendre différentes formes : collecte de jouets, de denrées alimentaires, organisation d''une tombola au bénéfice d''une asso caritative… C''est sympa, généreux et très fédérateur pour les équipes.
<p>','{}','{}',NULL,NULL,NULL,'2022-12-19 05:44:29.484','2022-12-19 05:44:29.484');
COMMIT;
