CREATE TABLE "public.customers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"cpf" varchar(11) UNIQUE,
	"confirm_email" bool NOT NULL DEFAULT 'false',
	"password" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "customers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.address" (
	"id" serial NOT NULL,
	"state_id" integer NOT NULL,
	"city_id" integer NOT NULL,
	"street" varchar(255) NOT NULL,
	"customer_id" varchar(255) NOT NULL,
	"zip_code" varchar(8) NOT NULL,
	"neighborhood" varchar(255) NOT NULL,
	CONSTRAINT "address_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.state" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "state_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.city" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "city_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.sessions" (
	"id" serial NOT NULL DEFAULT ' ',
	"token" varchar(255) NOT NULL,
	"customer_id" integer NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.products" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" DECIMAL NOT NULL,
	"description" varchar(255) NOT NULL,
	"img" TEXT NOT NULL,
	"category_id" integer NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.category" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "category_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.cart" (
	"id" serial NOT NULL,
	"customer_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"removed" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "cart_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.order" (
	"id" serial NOT NULL,
	"customer_id" integer NOT NULL,
	CONSTRAINT "order_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.order_products" (
	"id" serial NOT NULL,
	"order_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"product_price" DECIMAL NOT NULL,
	CONSTRAINT "order_products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.confirm_email" (
	"id" serial NOT NULL,
	"token" varchar(255) NOT NULL,
	"customer_id" integer NOT NULL,
	CONSTRAINT "confirm_email_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "address" ADD CONSTRAINT "address_fk0" FOREIGN KEY ("state_id") REFERENCES "state"("id");
ALTER TABLE "address" ADD CONSTRAINT "address_fk1" FOREIGN KEY ("city_id") REFERENCES "city"("id");
ALTER TABLE "address" ADD CONSTRAINT "address_fk2" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");



ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");

ALTER TABLE "products" ADD CONSTRAINT "products_fk0" FOREIGN KEY ("category_id") REFERENCES "category"("id");


ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");
ALTER TABLE "cart" ADD CONSTRAINT "cart_fk1" FOREIGN KEY ("product_id") REFERENCES "products"("id");

ALTER TABLE "order" ADD CONSTRAINT "order_fk0" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");

ALTER TABLE "order_products" ADD CONSTRAINT "order_products_fk0" FOREIGN KEY ("order_id") REFERENCES "order"("id");
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_fk1" FOREIGN KEY ("product_id") REFERENCES "products"("id");

ALTER TABLE "confirm_email" ADD CONSTRAINT "confirm_email_fk0" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");












