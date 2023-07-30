                                         Table "public.posts"
      Column      |          Type          | Collation | Nullable |              Default              
------------------+------------------------+-----------+----------+-----------------------------------
 id               | integer                |           | not null | nextval('posts_id_seq'::regclass)
 type_of_property | character varying(255) |           | not null | 
 price            | character varying(255) |           | not null | 
 city             | character varying(255) |           | not null | 
 whatsapp         | character varying(20)  |           | not null | 
 phone_number     | character varying(20)  |           | not null | 
 address          | text                   |           | not null | 
 beds             | integer                |           | not null | 
 baths            | integer                |           | not null | 
 rooms            | integer                |           | not null | 
 wifi             | boolean                |           |          | 
 running_water    | boolean                |           |          | 
 school           | character varying(50)  |           |          | 
 market           | character varying(50)  |           |          | 
 parking          | character varying(50)  |           |          | 
 bus_stop         | character varying(50)  |           |          | 
 restaurant       | character varying(50)  |           |          | 
 user_id          | integer                |           |          | 
Indexes:
    "posts_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "posts_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
Referenced by:
    TABLE "images_table" CONSTRAINT "images_table_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE

