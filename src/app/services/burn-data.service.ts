import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurnDataService {
  private burnData = [
    {
      "ID": "9833",
      "NOMBRE_PDC": "DAZ Actopan 3 Xochimilco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Xochimilco",
      "Dirección": "AV ACTOPAN, #115, SAN GREGORIO ATLAPULCO, XOCHIMILCO, CIUDAD DE MEXICO, C.P. 16600"
    },
    {
      "ID": "903",
      "NOMBRE_PDC": "EKT Ermita 1 La Viga",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZADA DE LA VIGA, #1851, UNIDAD MODELO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09089"
    },
    {
      "ID": "9505",
      "NOMBRE_PDC": "MEGA Selene Tláhuac",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "OCEANO DE LAS TEMPESTADES, #7-MZ 76, SELENE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13420"
    },
    {
      "ID": "2396",
      "NOMBRE_PDC": "MEGA Iztapalapa San Pablo",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZ ERMITA IZTAPALAPA, #1328, SANTA BARBARA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09000"
    },
    {
      "ID": "2545",
      "NOMBRE_PDC": "MEGA Metro La Purísima",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZ ERMITA IZTAPALAPA, #1806, SAN MIGUEL, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09360"
    },
    {
      "ID": "6142",
      "NOMBRE_PDC": "EKT Canal de Garay",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "AV TORRES ANILL PERIF, #LT1-MZ1, PARAJE SAN JUAN, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09830"
    },
    {
      "ID": "673",
      "NOMBRE_PDC": "MEGA Miramontes",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Coyoacán",
      "Dirección": "AV CANAL DE MIRAMONTES, #2067, LOS GIRASOLES, COYOACAN, CIUDAD DE MEXICO, C.P. 04920"
    },
    {
      "ID": "5492",
      "NOMBRE_PDC": "Presta Prenda Armada de Mex. Cafetales",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Coyoacán",
      "Dirección": "ARMADA DE MEXICO, #1441-PB, CAFETALES, COYOACAN, CIUDAD DE MEXICO, C.P. 04918"
    },
    {
      "ID": "2124",
      "NOMBRE_PDC": "EKT Tláhuac Los Olivos",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "AV TLAHUAC, #5988, LOS OLIVOS, TLAHUAC, CIUDAD DE MEXICO, C.P. 13210"
    },
    {
      "ID": "9671",
      "NOMBRE_PDC": "MEGA Santa Ana Tláhuac",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "AV TLAHUAC, #5824, SANTA ANA PONIENTE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13300"
    },
    {
      "ID": "5270",
      "NOMBRE_PDC": "MEGA Peñón",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZ IGNACIO ZARAGOZA, #2619, SANTA MARTHA ACATITLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09510"
    },
    {
      "ID": "2132",
      "NOMBRE_PDC": "MEGA Iztapalapa Av. Texcoco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "EMILIO N ACOSTA, #146B-MZ 180, SANTA MARTHA ACATITLA NORTE, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09140"
    },
    {
      "ID": "3793",
      "NOMBRE_PDC": "MEGA Tinacos",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZ ERMITA IZTAPALAPA, #2861, SANTA MARIA AZTAHUACAN, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09570"
    },
    {
      "ID": "2123",
      "NOMBRE_PDC": "EKT Iztapalapa Xalpa",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "AV ERMITA IZTAPALAPA, #3556, OJITO DE AGUA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09500"
    },
    {
      "ID": "2286",
      "NOMBRE_PDC": "EKT Tláhuac",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "AV TLAHUAC, #17, LOS REYES, TLAHUAC, CIUDAD DE MEXICO, C.P. 13080"
    },
    {
      "ID": "9485",
      "NOMBRE_PDC": "MEGA Tláhuac Paradero",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "AV TLAHUAC, #4925, SAN ISIDRO, TLAHUAC, CIUDAD DE MEXICO, C.P. 13094"
    },
    {
      "ID": "2716",
      "NOMBRE_PDC": "Presta Prenda Valentín G. Farias",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Venustiano Carranza",
      "Dirección": "AV 8 FCO MORAZAN, #172, VALENTIN GOMEZ FARIAS, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15010"
    },
    {
      "ID": "4336",
      "NOMBRE_PDC": "MEGA Tláhuac",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Tláhuac",
      "Dirección": "AV TLAHUAC, #5074, LA GUADALUPE, TLAHUAC, CIUDAD DE MEXICO, C.P. 13060"
    },
    {
      "ID": "5160",
      "NOMBRE_PDC": "EKT San Lorenzo Tezonco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "AV SAN LORENZO, #299, CERRO DE LA ESTRELLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09860"
    },
    {
      "ID": "9890",
      "NOMBRE_PDC": "MEGA Tláhuac Center",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "AV TLAHUAC, #1535-LOC 1 PB Y PA, EL VERGEL, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09880"
    },
    {
      "ID": "4747",
      "NOMBRE_PDC": "EKT Apatlaco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "AV APATLACO, #91, APATLACO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09430"
    },
    {
      "ID": "2503",
      "NOMBRE_PDC": "MEGA Del Moral",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztacalco",
      "Dirección": "AV RIO FRIO, #419, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "ID": "3489",
      "NOMBRE_PDC": "MEGA Agrícola Oriental",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztacalco",
      "Dirección": "OTE 243, #77, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "ID": "9947",
      "NOMBRE_PDC": "MEGA Plaza Central Churubusco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CANAL RIO CHURUBUSCO, #1635, CENTRAL DE ABASTO, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09040"
    },
    {
      "ID": "9800",
      "NOMBRE_PDC": "MEGA Plaza Churubusco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CTO BICENTENARIO AV RIO CHURUBUSCO, #1120, INFONAVIT IZTACALCO, IZTACALCO, CIUDAD DE MEXICO, C.P. 08900"
    },
    {
      "ID": "1481",
      "NOMBRE_PDC": "EKT Mercado Pantitlán",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztacalco",
      "Dirección": "CALLE 7, #28, AGRICOLA PANTITLAN, IZTACALCO, CIUDAD DE MEXICO, C.P. 08100"
    },
    {
      "ID": "9746",
      "NOMBRE_PDC": "MEGA Calzada Zaragoza Iztacalco",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztacalco",
      "Dirección": "CALZ IGNACIO ZARAGOZA, #1035, AGRICOLA ORIENTAL, IZTACALCO, CIUDAD DE MEXICO, C.P. 08500"
    },
    {
      "ID": "3625",
      "NOMBRE_PDC": "MEGA Cárcel de Mujeres",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Iztapalapa",
      "Dirección": "CALZ ERMITA IZTAPALAPA, #4160, SANTA MARTHA ACATITLA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09510"
    },
    {
      "ID": "6140",
      "NOMBRE_PDC": "EKT Zaragoza",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Venustiano Carranza",
      "Dirección": "CALZ IGNACIO ZARAGOZA, #774, AVIACION CIVIL, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15740"
    },
    {
      "ID": "9899",
      "NOMBRE_PDC": "DAZ Cd. Deportiva",
      "ENTIDAD": "Ciudad de México",
      "MUNICIPIO": "Venustiano Carranza",
      "Dirección": "AV RIO DE LA PIEDAD, #1056, PUEBLA, VENUSTIANO CARRANZA, CIUDAD DE MEXICO, C.P. 15020"
    },
    {
      "ID": "2144",
      "NOMBRE_PDC": "EKT Chimalhuacán San Agustín",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "AV BAJA CALIFORNIA, #SN, VILLA SAN AGUSTIN ATLAPULCO, CHIMALHUACAN, MEXICO, C.P. 56343"
    },
    {
      "ID": "2142",
      "NOMBRE_PDC": "EKT Chimalhuacán Los Patos",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "AV DE LOS PATOS, #MZ 4, CARPINTEROS, CHIMALHUACAN, MEXICO, C.P. 56334"
    },
    {
      "ID": "3199",
      "NOMBRE_PDC": "Presta Prenda Premium López Mateos",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV LOPEZ MATEOS, #573, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "ID": "2135",
      "NOMBRE_PDC": "EKT Neza Las Águilas",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV SEIS, #10, LAS AGUILAS, NEZAHUALCOYOTL, MEXICO, C.P. 57950"
    },
    {
      "ID": "2131",
      "NOMBRE_PDC": "EKT Nezahualcóyotl El Sol",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV AURELIANO RAMOS 1456, #SN-LT3 16 17, EL SOL, NEZAHUALCOYOTL, MEXICO, C.P. 57200"
    },
    {
      "ID": "4899",
      "NOMBRE_PDC": "MEGA Chimalhuacán",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "AV NEZAHUALCOYOTL, #SN, SANTA MARIA CHIMALHUACAN, CHIMALHUACAN, MEXICO, C.P. 56330"
    },
    {
      "ID": "6282",
      "NOMBRE_PDC": "MEGA Taxímetros",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV TAXIMETROS, #58, BOSQUES DE ARAGON, NEZAHUALCOYOTL, MEXICO, C.P. 57170"
    },
    {
      "ID": "5195",
      "NOMBRE_PDC": "DAZ Neza Aragón",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcoyotl",
      "Dirección": "AVENIDA CENTRAL, #SN-25, BOSQUES DE ARAGON, NEZAHUALCOYOTL, MEXICO, C.P. 57170"
    },
    {
      "ID": "6680",
      "NOMBRE_PDC": "MEGA Lago",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcoyotl",
      "Dirección": "AV ADOLFO LOPEZ MATEOS, #223, METROPOLITANA 1A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57730"
    },
    {
      "ID": "4543",
      "NOMBRE_PDC": "MEGA Santa Elena",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcoyotl",
      "Dirección": "AV DEL PENON, #SN, SANTA MARIA CHIMALHUACAN, CHIMALHUACAN, MEXICO, C.P. 56330"
    },
    {
      "ID": "9509",
      "NOMBRE_PDC": "MEGA Vidrieros",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "CENZONTLE, #MZ 242-LTE 1, VIDRIEROS, CHIMALHUACAN, MEXICO, C.P. 56356"
    },
    {
      "ID": "7041",
      "NOMBRE_PDC": "EKT Chimalhuacán Bordo",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "AV DEL PENON, #MZ 598-LT 5, XOCHIACA 2A SECC, CHIMALHUACAN, MEXICO, C.P. 56350"
    },
    {
      "ID": "2141",
      "NOMBRE_PDC": "EKT Chimalhuacán Las Torres",
      "ENTIDAD": "México",
      "MUNICIPIO": "Chimalhuacán",
      "Dirección": "AV DE LAS TORRES, #MZ 727, CANTEROS, CHIMALHUACAN, MEXICO, C.P. 56356"
    },
    {
      "ID": "5831",
      "NOMBRE_PDC": "Presta Prenda Palacio Nacional Neza",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "PALACIO NACIONAL, #LOTE 65 66-4, METROPOLITANA 2A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57740"
    },
    {
      "ID": "4697",
      "NOMBRE_PDC": "Presta Prenda Nezahualcóyotl 3A Secc.",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV SAN ANGEL, #SN, METROPOLITANA 3A SECC, NEZAHUALCOYOTL, MEXICO, C.P. 57750"
    },
    {
      "ID": "2810",
      "NOMBRE_PDC": "EKT Neza BS",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV GRAL LAZARO CARDENAS, #SN-ANCLA 3, REY NEZA, NEZAHUALCOYOTL, MEXICO, C.P. 57809"
    },
    {
      "ID": "2007",
      "NOMBRE_PDC": "EKT Neza Maravillas",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV VALLE DE BRAVO, #771, MARAVILLAS, NEZAHUALCOYOTL, MEXICO, C.P. 57410"
    },
    {
      "ID": "9516",
      "NOMBRE_PDC": "MEGA Benito Juárez",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcoyotl",
      "Dirección": "AV CHIMALHUACAN, #11, ESTADO DE MEXICO, NEZAHUALCOYOTL, MEXICO, C.P. 57210"
    },
    {
      "ID": "3515",
      "NOMBRE_PDC": "EKT Netzahualcóyotl 2 Patos",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcóyotl",
      "Dirección": "AV GUSTAVO BAZ, #208A, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "ID": "9566",
      "NOMBRE_PDC": "MEGA Carmelo Pérez Neza",
      "ENTIDAD": "México",
      "MUNICIPIO": "Nezahualcoyotl",
      "Dirección": "AV CARMELO PEREZ, #645, BENITO JUAREZ, NEZAHUALCOYOTL, MEXICO, C.P. 57000"
    },
    {
      "ID": "455",
      "NOMBRE_PDC": "PREMIUM CENTRAL CAMIONERA AGUASCALIENTES",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "CONVENIENCIA SAN LUIS POTOSI"
    },
    {
      "ID": "1342",
      "NOMBRE_PDC": "AGUASCALIENTES 2 ASUNCION",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV CONVENCION 1914 SUR, #611, LAS AMERICAS, AGUASCALIENTES, AGUASCALIENTES, C.P. 20230"
    },
    {
      "ID": "1504",
      "NOMBRE_PDC": "AGUASCALIENTES 1 ALLENDE",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV MAHATMA GANDHI, #SN, PILAR BLANCO INFONAVIT, AGUASCALIENTES, AGUASCALIENTES, C.P. 20289"
    },
    {
      "ID": "3010",
      "NOMBRE_PDC": "EKT MEGA AGUASCALIENTES PONIEN",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "ALLENDE, #117, ZONA CENTRO, AGUASCALIENTES, AGUASCALIENTES, C.P. 20000"
    },
    {
      "ID": "4554",
      "NOMBRE_PDC": "Mega Elektra Plaza Espacio Aguascalientes",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV CONVENCION, #2010, OLIVARES SANTANA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20010"
    },
    {
      "ID": "6544",
      "NOMBRE_PDC": "EKT AGUASCALIENTES CONVENCION",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV TECNOLOGICO, #SN, EJIDO OJOCALIENTE, AGUASCALIENTES, AGUASCALIENTES, C.P. 20198"
    },
    {
      "ID": "9380",
      "NOMBRE_PDC": "Tercer Anillo",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV CONVENCION PTE, #915, SANTA ANITA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20169"
    },
    {
      "ID": "9744",
      "NOMBRE_PDC": "EKT MAHATMA GANDHI",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV SIGLO XXI, #5202-LT 33, AGROPECUARIO, AGUASCALIENTES, AGUASCALIENTES, C.P. 20135"
    },
    {
      "ID": "9979",
      "NOMBRE_PDC": "EKT AV AGUASCALIENTES",
      "ENTIDAD": "Aguascalientes",
      "MUNICIPIO": "Aguascalientes",
      "Dirección": "AV MAHATMA GANDHI, #SN, AGRICULTURA, AGUASCALIENTES, AGUASCALIENTES, C.P. 20234"
    },
    {
      "ID": "121",
      "NOMBRE_PDC": "MEGA CULIACAN CLOUTHIER",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "AV MAQUIO J CLOUTHIER, #SN, CULIACAN CENTRO, CULIACAN, SINALOA, C.P. 80000"
    },
    {
      "ID": "2098",
      "NOMBRE_PDC": "EKT CULIACAN SINALOA",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "BLVD FRANCISCO I MADERO, #1963 OTE, MIGUEL HIDALGO, CULIACAN, SINALOA, C.P. 80090"
    },
    {
      "ID": "2714",
      "NOMBRE_PDC": "Culiacan plaza sur",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "AV MAQUIO J CLOUTHIER, #SN-LOC 9, LOMA LINDA, CULIACAN, SINALOA, C.P. 80177"
    },
    {
      "ID": "2782",
      "NOMBRE_PDC": "DAZ Culiacn Pedro Infante",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "BLVD JESUS KUMATE, #3500-LOC 101 102 Y 103, SAN RAFAEL, CULIACAN, SINALOA, C.P. 80150"
    },
    {
      "ID": "3829",
      "NOMBRE_PDC": "MEGA CULIACAN 1 C MILITAR",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "HEROICO COLEGIO MILITAR, #2006, SINALOA, CULIACAN, SINALOA, C.P. 80260"
    },
    {
      "ID": "4185",
      "NOMBRE_PDC": "BLVD UNIVERSITARIOS",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "BLVD UNIVERSITARIOS ORIENTE, #75, IGNACIO ALLENDE, CULIACAN, SINALOA, C.P. 80010"
    },
    {
      "ID": "5021",
      "NOMBRE_PDC": "ANGEL FLORES",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "ANGEL FLORES, #230 PTE, CULIACAN CENTRO, CULIACAN, SINALOA, C.P. 80000"
    },
    {
      "ID": "9802",
      "NOMBRE_PDC": "Elektra Abastos Culiacan",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "AV PATRIA, #3140, LAZARO CARDENAS, CULIACAN, SINALOA, C.P. 80290"
    },
    {
      "ID": "9811",
      "NOMBRE_PDC": "EKT PLAZA SAN ISIDRO",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "BLVD DE LOS GANADEROS, #1787-LOC SA08 Y SA 09, LOMAS DE SAN ISIDRO, CULIACAN, SINALOA, C.P. 80197"
    },
    {
      "ID": "9883",
      "NOMBRE_PDC": "EKT PLAZA MIVIA LOLA",
      "ENTIDAD": "Sinaloa",
      "MUNICIPIO": "Culiacán",
      "Dirección": "AV LOLA BELTRAN, #2555, MONTECARLO RESIDENCIAL, CULIACAN, SINALOA, C.P. 80054"
    },
    {
      "ID": "1225",
      "NOMBRE_PDC": "CONVENIENCIA SAN LUIS POTOSI",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "AV RICARDO B ANAYA, #1216, JARDINES DE ORIENTE, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78390"
    },
    {
      "ID": "2161",
      "NOMBRE_PDC": "MEGA CARRETERA A RIO VERDE",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "Soledad de Graciano Sánchez",
      "Dirección": "RIO VERDE, #700, JARDINES DEL VALLE, SOLEDAD DE GRACIANO SANCHEZ, SAN LUIS POTOSI, C.P. 78437"
    },
    {
      "ID": "2393",
      "NOMBRE_PDC": "LOS OLIVOS",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "AV DE LOS OLIVOS, #105-INT A, LOS OLIVOS, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78130"
    },
    {
      "ID": "3131",
      "NOMBRE_PDC": "Elektra Acceso Norte SLP",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "AV ACCESO NORTE, #401, INDUSTRIAL MEXICANA, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78309"
    },
    {
      "ID": "4488",
      "NOMBRE_PDC": "EKT SLP HIMNO NACIONAL",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "HIMNO NACIONAL, #4005, DEL REAL, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78280"
    },
    {
      "ID": "4716",
      "NOMBRE_PDC": "San Luis Potosi Centro",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "AV REFORMA, #285, SAN LUIS POTOSI CENTRO, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78000"
    },
    {
      "ID": "5393",
      "NOMBRE_PDC": "Munoz SLP",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "AV MUNOZ, #670, LOS REYITOS, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78170"
    },
    {
      "ID": "7480",
      "NOMBRE_PDC": "PP Premium 8 San Luis Potosi",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "DAMIAN CARMONA, #610, SAN LUIS POTOSI CENTRO, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78000"
    },
    {
      "ID": "9740",
      "NOMBRE_PDC": "EKT PERIFERICO ORIENTE",
      "ENTIDAD": "San Luis Potosí",
      "MUNICIPIO": "San Luis Potosí",
      "Dirección": "PERIFERICO OTE 100 FRACC, #0, PRADOS SAN VICENTE 2A SECC, SAN LUIS POTOSI, SAN LUIS POTOSI, C.P. 78394"
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
