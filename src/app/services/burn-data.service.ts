import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurnDataService {
  private burnData = [
    {
      "id": "9833",
      "nombre_pdc": "DAZ Actopan 3 Xochimilco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Xochimilco",
      "direccion": "AV ACTOPAN, #115, SAN GREGORIO ATLAPULCO, XOCHIMILCO, CIUDAD DE MEXICO, C.P. 16600"
    },
    {
      "id": "903",
      "nombre_pdc": "EKT Ermita 1 La Viga",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZADA DE LA VIGA, #1851, UNidAD MODELO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09089"
    },
    {
      "id": "9505",
      "nombre_pdc": "MEGA Selene Tláhuac",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "OCEANO DE LAS TEMPESTADES, #7-MZ 76, SELENE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13420"
    },
    {
      "id": "2396",
      "nombre_pdc": "MEGA Iztapalapa San Pablo",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZ ERMITA IZTAPALAPA, #1328, SANTA BARBARA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09000"
    },
    {
      "id": "2545",
      "nombre_pdc": "MEGA Metro La Purísima",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZ ERMITA IZTAPALAPA, #1806, SAN MIGUEL, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09360"
    },
    {
      "id": "6142",
      "nombre_pdc": "EKT Canal de Garay",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "AV TORRES ANILL PERIF, #LT1-MZ1, PARAJE SAN JUAN, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09830"
    },
    {
      "id": "673",
      "nombre_pdc": "MEGA Miramontes",
      "entidad": "Ciudad de Mexico",
      "municipio": "Coyoacán",
      "direccion": "AV CANAL DE MIRAMONTES, #2067, LOS GIRASOLES, COYOACAN, CIUDAD DE MEXICO, C.P. 04920"
    },
    {
      "id": "5492",
      "nombre_pdc": "Presta Prenda Armada de Mex. Cafetales",
      "entidad": "Ciudad de Mexico",
      "municipio": "Coyoacán",
      "direccion": "ARMADA DE MEXICO, #1441-PB, CAFETALES, COYOACAN, CIUDAD DE MEXICO, C.P. 04918"
    },
    {
      "id": "2124",
      "nombre_pdc": "EKT Tláhuac Los Olivos",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "AV TLAHUAC, #5988, LOS OLIVOS, TLAHUAC, CIUDAD DE MEXICO, C.P. 13210"
    },
    {
      "id": "9671",
      "nombre_pdc": "MEGA Santa Ana Tláhuac",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "AV TLAHUAC, #5824, SANTA ANA PONIENTE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13300"
    },
    {
      "id": "5270",
      "nombre_pdc": "MEGA Peñón",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZ IGNACIO ZARAGOZA, #2619, SANTA MARTHA ACATITLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09510"
    },
    {
      "id": "2132",
      "nombre_pdc": "MEGA Iztapalapa Av. Texcoco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "EMILIO N ACOSTA, #146B-MZ 180, SANTA MARTHA ACATITLA NORTE, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09140"
    },
    {
      "id": "3793",
      "nombre_pdc": "MEGA Tinacos",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZ ERMITA IZTAPALAPA, #2861, SANTA MARIA AZTAHUACAN, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09570"
    },
    {
      "id": "2123",
      "nombre_pdc": "EKT Iztapalapa Xalpa",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "AV ERMITA IZTAPALAPA, #3556, OJITO DE AGUA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09500"
    },
    {
      "id": "2286",
      "nombre_pdc": "EKT Tláhuac",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "AV TLAHUAC, #17, LOS REYES, TLAHUAC, CIUDAD DE MEXICO, C.P. 13080"
    },
    {
      "id": "9485",
      "nombre_pdc": "MEGA Tláhuac Paradero",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "AV TLAHUAC, #4925, SAN ISidRO, TLAHUAC, CIUDAD DE MEXICO, C.P. 13094"
    },
    {
      "id": "2716",
      "nombre_pdc": "Presta Prenda Valentín G. Farias",
      "entidad": "Ciudad de Mexico",
      "municipio": "Venustiano Carranza",
      "direccion": "AV 8 FCO MORAZAN, #172, VALENTIN GOMEZ FARIAS, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15010"
    },
    {
      "id": "4336",
      "nombre_pdc": "MEGA Tláhuac",
      "entidad": "Ciudad de Mexico",
      "municipio": "Tláhuac",
      "direccion": "AV TLAHUAC, #5074, LA GUADALUPE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13060"
    },
    {
      "id": "5160",
      "nombre_pdc": "EKT San Lorenzo Tezonco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "AV SAN LORENZO, #299, CERRO DE LA ESTRELLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09860"
    },
    {
      "id": "9890",
      "nombre_pdc": "MEGA Tláhuac Center",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "AV TLAHUAC, #1535-LOC 1 PB Y PA, EL VERGEL, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09880"
    },
    {
      "id": "4747",
      "nombre_pdc": "EKT Apatlaco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "AV APATLACO, #91, APATLACO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09430"
    },
    {
      "id": "2503",
      "nombre_pdc": "MEGA Del Moral",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztacalco",
      "direccion": "AV RIO FRIO, #419, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "id": "3489",
      "nombre_pdc": "MEGA Agrícola Oriental",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztacalco",
      "direccion": "OTE 243, #77, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "id": "9947",
      "nombre_pdc": "MEGA Plaza Central Churubusco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CANAL RIO CHURUBUSCO, #1635, CENTRAL DE ABASTO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09040"
    },
    {
      "id": "9800",
      "nombre_pdc": "MEGA Plaza Churubusco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CTO BICENTENARIO AV RIO CHURUBUSCO, #1120, INFONAVIT IZTACALCO, IZTACALCO, CIUDAD DE MEXICO, C.P. 08900"
    },
    {
      "id": "1481",
      "nombre_pdc": "EKT Mercado Pantitlán",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztacalco",
      "direccion": "CALLE 7, #28, AGRICOLA PANTITLAN, IZTACALCO, CIUDAD DE MEXICO, C.P. 08100"
    },
    {
      "id": "9746",
      "nombre_pdc": "MEGA Calzada Zaragoza Iztacalco",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztacalco",
      "direccion": "CALZ IGNACIO ZARAGOZA, #1035, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "id": "3625",
      "nombre_pdc": "MEGA Cárcel de Mujeres",
      "entidad": "Ciudad de Mexico",
      "municipio": "Iztapalapa",
      "direccion": "CALZ ERMITA IZTAPALAPA, #4160, SANTA MARTHA ACATITLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09510"
    },
    {
      "id": "6140",
      "nombre_pdc": "EKT Zaragoza",
      "entidad": "Ciudad de Mexico",
      "municipio": "Venustiano Carranza",
      "direccion": "CALZ IGNACIO ZARAGOZA, #774, AVIACION CIVIL, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15740"
    },
    {
      "id": "9899",
      "nombre_pdc": "DAZ Cd. Deportiva",
      "entidad": "Ciudad de Mexico",
      "municipio": "Venustiano Carranza",
      "direccion": "AV RIO DE LA PIEDAD, #1056, PUEBLA, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15020"
    },
    {
      "id": "2144",
      "nombre_pdc": "EKT Chimalhuacán San Agustín",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "AV BAJA CALIFORNIA, #SN, VILLA SAN AGUSTIN ATLAPULCO, CHIMALHUACAN, MEXICO, C.P. 56343"
    },
    {
      "id": "2142",
      "nombre_pdc": "EKT Chimalhuacán Los Patos",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "AV DE LOS PATOS, #MZ 4, CARPINTEROS, CHIMALHUACAN, MEXICO, C.P. 56334"
    },
    {
      "id": "3199",
      "nombre_pdc": "Presta Prenda Premium López Mateos",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV LOPEZ MATEOS, #573, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "id": "2135",
      "nombre_pdc": "EKT Neza Las Águilas",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV SEIS, #10, LAS AGUILAS, NEZAHUALCOYOTL, MEXICO, C.P. 57950"
    },
    {
      "id": "2131",
      "nombre_pdc": "EKT Nezahualcóyotl El Sol",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV AURELIANO RAMOS 1456, #SN-LT3 16 17, EL SOL, NEZAHUALCOYOTL, MEXICO, C.P. 57200"
    },
    {
      "id": "4899",
      "nombre_pdc": "MEGA Chimalhuacán",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "AV NEZAHUALCOYOTL, #SN, SANTA MARIA CHIMALHUACAN, CHIMALHUACAN, MEXICO, C.P. 56330"
    },
    {
      "id": "6282",
      "nombre_pdc": "MEGA Taxímetros",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV TAXIMETROS, #58, BOSQUES DE ARAGON, NEZAHUALCOYOTL, MEXICO, C.P. 57170"
    },
    {
      "id": "5195",
      "nombre_pdc": "DAZ Neza Aragón",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcoyotl",
      "direccion": "AVENidA CENTRAL, #SN-25, BOSQUES DE ARAGON, NEZAHUALCOYOTL, MEXICO, C.P. 57170"
    },
    {
      "id": "6680",
      "nombre_pdc": "MEGA Lago",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcoyotl",
      "direccion": "AV ADOLFO LOPEZ MATEOS, #223, METROPOLITANA 1A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57730"
    },
    {
      "id": "4543",
      "nombre_pdc": "MEGA Santa Elena",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcoyotl",
      "direccion": "AV DEL PENON, #SN, SANTA MARIA CHIMALHUACAN, CHIMALHUACAN, MEXICO, C.P. 56330"
    },
    {
      "id": "9509",
      "nombre_pdc": "MEGA Vidrieros",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "CENZONTLE, #MZ 242-LTE 1, VidRIEROS, CHIMALHUACAN, MEXICO, C.P. 56356"
    },
    {
      "id": "7041",
      "nombre_pdc": "EKT Chimalhuacán Bordo",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "AV DEL PENON, #MZ 598-LT 5, XOCHIACA 2A SECC, CHIMALHUACAN, MEXICO, C.P. 56350"
    },
    {
      "id": "2141",
      "nombre_pdc": "EKT Chimalhuacán Las Torres",
      "entidad": "Ciudad de Mexico",
      "municipio": "Chimalhuacán",
      "direccion": "AV DE LAS TORRES, #MZ 727, CANTEROS, CHIMALHUACAN, MEXICO, C.P. 56356"
    },
    {
      "id": "5831",
      "nombre_pdc": "Presta Prenda Palacio Nacional Neza",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "PALACIO NACIONAL, #LOTE 65 66-4, METROPOLITANA 2A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57740"
    },
    {
      "id": "4697",
      "nombre_pdc": "Presta Prenda Nezahualcóyotl 3A Secc.",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV SAN ANGEL, #SN, METROPOLITANA 3A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57750"
    },
    {
      "id": "2810",
      "nombre_pdc": "EKT Neza BS",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV GRAL LAZARO CARDENAS, #SN-ANCLA 3, REY NEZA, NEZAHUALCOYOTL, MEXICO, C.P. 57809"
    },
    {
      "id": "2007",
      "nombre_pdc": "EKT Neza Maravillas",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV VALLE DE BRAVO, #771, MARAVILLAS, NEZAHUALCOYOTL, MEXICO, C.P. 57410"
    },
    {
      "id": "9516",
      "nombre_pdc": "MEGA Benito Juárez",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcoyotl",
      "direccion": "AV CHIMALHUACAN, #11, ESTADO DE MEXICO, NEZAHUALCOYOTL, MEXICO, C.P. 57210"
    },
    {
      "id": "3515",
      "nombre_pdc": "EKT Netzahualcóyotl 2 Patos",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcóyotl",
      "direccion": "AV GUSTAVO BAZ, #208A, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "id": "9566",
      "nombre_pdc": "MEGA Carmelo Pérez Neza",
      "entidad": "Ciudad de Mexico",
      "municipio": "Nezahualcoyotl",
      "direccion": "AV CARMELO PEREZ, #645, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "id": "455",
      "nombre_pdc": "PREMIUM CENTRAL CAMIONERA AGUASCALIENTES",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "CONVENIENCIA SAN LUIS POTOSI"
    },
    {
      "id": "1342",
      "nombre_pdc": "AGUASCALIENTES 2 ASUNCION",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV CONVENCION 1914 SUR, #611, LAS AMERICAS, AGUASCALIENTES, AGUASCALIENTES, C.P. 20230"
    },
    {
      "id": "1504",
      "nombre_pdc": "AGUASCALIENTES 1 ALLENDE",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV MAHATMA GANDHI, #SN, PILAR BLANCO INFONAVIT, AGUASCALIENTES, AGUASCALIENTES, C.P. 20289"
    },
    {
      "id": "3010",
      "nombre_pdc": "EKT MEGA AGUASCALIENTES PONIEN",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "ALLENDE, #117, ZONA CENTRO, AGUASCALIENTES, AGUASCALIENTES, C.P. 20000"
    },
    {
      "id": "4554",
      "nombre_pdc": "Mega Elektra Plaza Espacio Aguascalientes",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV CONVENCION, #2010, OLIVARES SANTANA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20010"
    },
    {
      "id": "6544",
      "nombre_pdc": "EKT AGUASCALIENTES CONVENCION",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV TECNOLOGICO, #SN, EJidO OJOCALIENTE, AGUASCALIENTES, AGUASCALIENTES, C.P. 20198"
    },
    {
      "id": "9380",
      "nombre_pdc": "Tercer Anillo",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV CONVENCION PTE, #915, SANTA ANITA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20169"
    },
    {
      "id": "9744",
      "nombre_pdc": "EKT MAHATMA GANDHI",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV SIGLO XXI, #5202-LT 33, AGROPECUARIO, AGUASCALIENTES, AGUASCALIENTES, C.P. 20135"
    },
    {
      "id": "9979",
      "nombre_pdc": "EKT AV AGUASCALIENTES",
      "entidad": "Aguascalientes",
      "municipio": "Aguascalientes",
      "direccion": "AV MAHATMA GANDHI, #SN, AGRICULTURA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20234"
    },
    {
      "id": "121",
      "nombre_pdc": "MEGA CULIACAN CLOUTHIER",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "AV MAQUIO J CLOUTHIER, #SN, CULIACAN CENTRO, CULIACAN, SINALOA, C.P. 80000"
    },
    {
      "id": "2098",
      "nombre_pdc": "EKT CULIACAN SINALOA",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "BLVD FRANCISCO I MADERO, #1963 OTE, MIGUEL HidALGO, CULIACAN, SINALOA, C.P. 80090"
    },
    {
      "id": "2714",
      "nombre_pdc": "Culiacan plaza sur",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "AV MAQUIO J CLOUTHIER, #SN-LOC 9, LOMA LINDA, CULIACAN, SINALOA, C.P. 80177"
    },
    {
      "id": "2782",
      "nombre_pdc": "DAZ Culiacn Pedro Infante",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "BLVD JESUS KUMATE, #3500-LOC 101 102 Y 103, SAN RAFAEL, CULIACAN, SINALOA, C.P. 80150"
    },
    {
      "id": "3829",
      "nombre_pdc": "MEGA CULIACAN 1 C MILITAR",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "HEROICO COLEGIO MILITAR, #2006, SINALOA, CULIACAN, SINALOA, C.P. 80260"
    },
    {
      "id": "4185",
      "nombre_pdc": "BLVD UNIVERSITARIOS",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "BLVD UNIVERSITARIOS ORIENTE, #75, IGNACIO ALLENDE, CULIACAN, SINALOA, C.P. 80010"
    },
    {
      "id": "5021",
      "nombre_pdc": "ANGEL FLORES",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "ANGEL FLORES, #230 PTE, CULIACAN CENTRO, CULIACAN, SINALOA, C.P. 80000"
    },
    {
      "id": "9802",
      "nombre_pdc": "Elektra Abastos Culiacan",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "AV PATRIA, #3140, LAZARO CARDENAS, CULIACAN, SINALOA, C.P. 80290"
    },
    {
      "id": "9811",
      "nombre_pdc": "EKT PLAZA SAN ISidRO",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "BLVD DE LOS GANADEROS, #1787-LOC SA08 Y SA 09, LOMAS DE SAN ISidRO, CULIACAN, SINALOA, C.P. 80197"
    },
    {
      "id": "9883",
      "nombre_pdc": "EKT PLAZA MIVIA LOLA",
      "entidad": "Sinaloa",
      "municipio": "Culiacán",
      "direccion": "AV LOLA BELTRAN, #2555, MONTECARLO RESidENCIAL, CULIACAN, SINALOA, C.P. 80054"
    },
    {
      "id": "1225",
      "nombre_pdc": "CONVENIENCIA SAN LUIS POTOSI",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "AV RICARDO B ANAYA, #1216, JARDINES DE ORIENTE, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78390"
    },
    {
      "id": "2161",
      "nombre_pdc": "MEGA CARRETERA A RIO VERDE",
      "entidad": "San Luis Potosí",
      "municipio": "Soledad de Graciano Sánchez",
      "direccion": "RIO VERDE, #700, JARDINES DEL VALLE, SOLEDAD DE GRACIANO SANCHEZ, SAN LUIS POTOSI, C.P. 78437"
    },
    {
      "id": "2393",
      "nombre_pdc": "LOS OLIVOS",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "AV DE LOS OLIVOS, #105-INT A, LOS OLIVOS, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78130"
    },
    {
      "id": "3131",
      "nombre_pdc": "Elektra Acceso Norte SLP",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "AV ACCESO NORTE, #401, INDUSTRIAL MEXICANA, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78309"
    },
    {
      "id": "4488",
      "nombre_pdc": "EKT SLP HIMNO NACIONAL",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "HIMNO NACIONAL, #4005, DEL REAL, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78280"
    },
    {
      "id": "4716",
      "nombre_pdc": "San Luis Potosi Centro",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "AV REFORMA, #285, SAN LUIS POTOSI CENTRO, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78000"
    },
    {
      "id": "5393",
      "nombre_pdc": "Munoz SLP",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "AV MUNOZ, #670, LOS REYITOS, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78170"
    },
    {
      "id": "7480",
      "nombre_pdc": "PP Premium 8 San Luis Potosi",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "DAMIAN CARMONA, #610, SAN LUIS POTOSI CENTRO, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78000"
    },
    {
      "id": "9740",
      "nombre_pdc": "EKT PERIFERICO ORIENTE",
      "entidad": "San Luis Potosí",
      "municipio": "San Luis Potosí",
      "direccion": "PERIFERICO OTE 100 FRACC, #0, PRADOS SAN VICENTE 2A SECC, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78394"
    }
  ]

  constructor() { }

  getBurnData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.burnData);
      }, 4000);
    });
  }
}
