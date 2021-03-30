USE dentist;

--No values in ID colomn cause it will use auto number--

INSERT INTO patient (name, phone, email, address) VALUES ('Bob Builder', '091-12345678', 'Bob@builder.com', 'Main Street , the Village ');

INSERT INTO patient (name, phone, email, address) VALUES ('Shaggy Rogers', '085-52008800', 'Shaggy@mystery.inc', 'Main Street , car park ');

INSERT INTO patient (name, phone, email, address) VALUES ('Mr Bean', '091-43110808', 'Bean@there.com', 'Stanmer , Stanmer Hall ');

INSERT INTO patient (name, phone, email, address) VALUES ('Ben Kenobi', '091-46582021', 'Ben@spacemail.com', 'tatooine , country side ');

INSERT INTO patient (name, phone, email, address) VALUES ('Lois Griffin ', '091-12345678', 'Lois@gmail.com', ' Spooner Street  ,  house 31 ');


INSERT INTO specialist (name, phone, email, address) VALUES('Philip Sherman', '086-6705432', 'PhilipSherman@gmail.com','Sydney, 42 Wallaby Way');
 
INSERT INTO specialist (name, phone, email, address) VALUES('Leonard McCoy', '086-1966009', 'Bones@gmail.com','Spooner, 24 Trek');
 
INSERT INTO Treatment(name, fees, type, description ) VALUES('Fillings and Repairs','100','A filling for a decayed tooth','Dental fillings and repairs use restorative materials used to repair teeth which have been compromised due to cavities or trauma');

INSERT INTO Treatment(name, fees, type, description ) VALUES('Crowns and Caps','80','A crown or cap to cover over a tooth that has been damaged by decay ','A crown can be made of acrylic, metal, porcelain, or porcelain bonded to metal.');

INSERT INTO Treatment(name, fees, type, description ) VALUES('Braces','1000','teeth realignment','A dental brace is a device used to correct the alignment of teeth and bite-related problems (including underbite, overbite, etc.). Braces straighten teeth by exerting steady pressure on the teeth');



INSERT INTO appointment (`patient_id`, `source`, `date`, `duration`, `treatment_id`) VALUES ('1', 'email', '2021-04-14', '30', '1');

INSERT INTO appointment (`patient_id`, `source`, `date`, `duration`, `treatment_id`) VALUES ('2', 'post', '2021-04-12', '30', '2');

INSERT INTO appointment (`patient_id`, `source`, attended,`date`, `duration`, `treatment_id`, `specialist_id`) VALUES (3, 'phone', 1,'2021-02-14', 60.0, 3, 1);

INSERT INTO appointment (`patient_id`, `source`, `date`, cancellattion, `duration`, `treatment_id`) VALUES ('4', 'walk', '2021-03-22', '2021-03-21','30', '1');

INSERT INTO appointment (`patient_id`, `source`, `date`, attended, `duration`, `treatment_id`) VALUES ('5', 'walk', '2021-02-02','1','30', '1');



-- 3 queries

-- useful queries when making appointments 

SELECT * FROM patient where name like '%Builder%';


-- selecting future appoint, tshowing today first.
select p.name, p.phone, a.date, a.duration 
from appointment a inner join patient p On a.patient_id = p.id 
where a.date > UTC_DATE() 
order by a.date asc
;



-- bill full attendance, attended true, go from appt to trartment (amount) and no bill there already
INSERT INTO bill(
`appointment_id`,
`date`,
`amount`)
--
select a.id,a.date, t.fees FROM appointment a 
LEFT OUTER JOIN bill b ON b.appointment_id = a.id 
LEFT OUTER JOIN treatment t ON a.treatment_id = t.id 
WHERE a.date < SYSDATE() AND b.id IS null and attended = 1;

-- bill  late cancelation, less 10 days,  from appt  and no bill there already
INSERT INTO bill(
`appointment_id`,
`date`,
`amount`)
select a.id, a.date, 100 FROM appointment a 
LEFT OUTER JOIN bill b ON b.appointment_id = a.id 
WHERE a.date < SYSDATE() AND b.id IS null and cancellattion is not null and DATEDIFF(a.date, a.cancellattion) < 10;

-- bill no show , no canncel and no attendence,  from appt  and no bill there already
INSERT INTO bill(
`appointment_id`,
`date`,
`amount`)
select a.id, a.date, 100 FROM appointment a LEFT OUTER JOIN bill b ON b.appointment_id = a.id LEFT OUTER JOIN treatment t ON a.treatment_id = t.id WHERE a.date < SYSDATE() AND b.id IS null and cancellattion is null and attended is null or attended = 0;

-- delete from payment;
-- put in 2 under pays, need toput in a bill_id
-- utc date is todays date
insert into payment (bill_id, amount, date, method, type ) values ( 8, 10, UTC_DATE(), 'credit card', 'part' );
insert into payment (bill_id, amount, date, method, type ) values ( 8, 20, UTC_DATE(), 'credit card', 'part' );


-- show al lunder payemnts
--sums up all the payment amount for each bill and see if it's less than amount of bill
select b.id, b.amount-tp.paid 
  from (select p.bill_id, sum(p.amount) as paid from payment p group by p.bill_id) tp 
  inner join bill b on (b.id = tp.bill_id) where tp.paid < b.amount 