create table car
(
  car_uid UUID NOT NULL PRIMARY KEY,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  price NUMERIC(19, 2) NOT NULL
);

create table person
(
  person_uid UUID NOT NULL PRIMARY KEY,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  email VARCHAR(150),
  gender VARCHAR(7) NOT NULL,
  dob DATE NOT NULL,
  cob VARCHAR(50) NOT NULL,
  car_uid UUID REFERENCES car(car_uid),
  UNIQUE(car_uid),
  UNIQUE(email)
);

insert into car
  (car_uid, make, model, price)
values
  (uuid_generate_v4(), 'Chevrolet', 'Venture', '83396.39');
insert into car
  (car_uid, make, model, price)
values
  (uuid_generate_v4(), 'Volkswagen', 'Passat', '28871.21');
insert into car
  (car_uid, make, model, price)
values
  (uuid_generate_v4(), 'Audi', 'A4', '21891.36');

insert into person
  (person_uid, fname, lname, email, gender, dob, cob)
values
  (uuid_generate_v4(), 'Chelsae', 'Boughtflower', null, 'F', '1993-02-24', 'PH');
insert into person
  (person_uid, fname, lname, email, gender, dob, cob)
values
  (uuid_generate_v4(), 'Isaac', 'Sweett', 'isweett1@tinyurl.com', 'M', '1980-04-23', 'ID');
insert into person
  (person_uid, fname, lname, email, gender, dob, cob)
values
  (uuid_generate_v4(), 'Ambur', 'Wellbank', null, 'F', '1966-03-21', 'CZ');
insert into person
  (person_uid, fname, lname, email, gender, dob, cob)
values
  (uuid_generate_v4(), 'Pietrek', 'Murrhardt', null, 'M', '1983-12-30', 'MN');
