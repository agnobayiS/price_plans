
CREATE TABLE newplan(
id SERIAL PRIMARY KEY,
names text NOT NULL,
total int NOT NULL 

)

CREATE TABLE PLANS (
id SERIAL PRIMARY KEY,
names text NOT NULL,
SMSPRICE int NOT NULL,
CALLPRICE int NOT NULL,
CALLTOTAL int NOT NULL
);




insert into PLANS (PLAN_CODE,SMSPRICE,CALLPRICE,CALLTOTAL) values ('sms100',1,2 ,12);
insert into PLANS (PLAN_CODE,SMSPRICE,CALLPRICE,CALLTOTAL) values ('call100',1,1,8);
insert into PLANS (PLAN_CODE,SMSPRICE,CALLPRICE,CALLTOTAL) values ('text-me',2 ,3 ,15);




