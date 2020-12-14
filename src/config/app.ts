export const appConfig = {
  user: {
    account: {
      id: {
        minLength: 5,
      },
      holder: {
        name: {
          minLength: 1,
        },
        email: {
          value: {
            minLength: 5,
          },
          resetCode: {
            minLength: 4,
            maxLength: 4,
          },
        },
        mobile: {
          country: {
            minLength: 1,
          },
          isdCode: {
            minLength: 1,
          },
          msisdn: {
            minLength: 1,
          },
          iso2digitCode: {
            minLength: 2,
            maxLength: 2,
          },
          iso3digitCode: {
            minLength: 3,
            maxLength: 3,
          },
        },
        authentication: {
          pswd: {
            value: {
              minLength: 8,
            },
            resetCode: {
              minLength: 9,
              maxLength: 9,
            },
          },
          loginCode: {
            minLength: 9,
            maxLength: 9,
          },
        },
        address: {
          minLength: 1,
        },
      },
    },
    billing: { info: { minLength: 1 }, address: { minLength: 1 } },
    meta: { info: { minLength: 1 } },
    log: {
      info: { minLength: 1 },
    },
  },
  checkpoint: {
    info: {
      minLength: 1,
    },
  },
  mail: {
    from: "Particle System no-reply@particle.systems",
    template: {
      sendVerificationLink: {
        id: "21407413",
        endpoint: "https://app.particle.systems/verify-email",
      },
      model: {
        signature: {
          name: {
            first: "Tuhin",
            middle: "",
            last: "Bhuyan",
          },
          designation: "Founder",
          company: "Particle Systems",
          dpUrl: "",
          socialUrls: {
            linkedin: "https://www.linkedin.com/in/xtbhyn",
            twitter: "https://twitter.com/xtbhyn",
          },
        },
        support: {
          email: {
            value: "support@particle.systems",
            href: `mailto:support@particle.systems`,
          },
        },
        website: {
          name: "Particle Systems",
          url: "https://particle.systems",
        },
      },
    },
  },
};

export const dialCodes = [
  {
    name: "Afghanistan",
    isdCode: "93",
    iso2digitCode: "AF",
    iso3digitCode: "AFG",
  },
  {
    name: "Albania",
    isdCode: "355",
    iso2digitCode: "AL",
    iso3digitCode: "ALB",
  },
  {
    name: "Algeria",
    isdCode: "213",
    iso2digitCode: "DZ",
    iso3digitCode: "DZA",
  },
  {
    name: "American Samoa",
    isdCode: "1-684",
    iso2digitCode: "AS",
    iso3digitCode: "ASM",
  },
  {
    name: "Andorra",
    isdCode: "376",
    iso2digitCode: "AD",
    iso3digitCode: "AND",
  },
  {
    name: "Angola",
    isdCode: "244",
    iso2digitCode: "AO",
    iso3digitCode: "AGO",
  },
  {
    name: "Anguilla",
    isdCode: "1-264",
    iso2digitCode: "AI",
    iso3digitCode: "AIA",
  },
  {
    name: "Antarctica",
    isdCode: "672",
    iso2digitCode: "AQ",
    iso3digitCode: "ATA",
  },
  {
    name: "Antigua and Barbuda",
    isdCode: "1-268",
    iso2digitCode: "AG",
    iso3digitCode: "ATG",
  },
  {
    name: "Argentina",
    isdCode: "54",
    iso2digitCode: "AR",
    iso3digitCode: "ARG",
  },
  {
    name: "Armenia",
    isdCode: "374",
    iso2digitCode: "AM",
    iso3digitCode: "ARM",
  },
  {
    name: "Aruba",
    isdCode: "297",
    iso2digitCode: "AW",
    iso3digitCode: "ABW",
  },
  {
    name: "Australia",
    isdCode: "61",
    iso2digitCode: "AU",
    iso3digitCode: "AUS",
  },
  {
    name: "Austria",
    isdCode: "43",
    iso2digitCode: "AT",
    iso3digitCode: "AUT",
  },
  {
    name: "Azerbaijan",
    isdCode: "994",
    iso2digitCode: "AZ",
    iso3digitCode: "AZE",
  },
  {
    name: "Bahamas",
    isdCode: "1-242",
    iso2digitCode: "BS",
    iso3digitCode: "BHS",
  },
  {
    name: "Bahrain",
    isdCode: "973",
    iso2digitCode: "BH",
    iso3digitCode: "BHR",
  },
  {
    name: "Bangladesh",
    isdCode: "880",
    iso2digitCode: "BD",
    iso3digitCode: "BGD",
  },
  {
    name: "Barbados",
    isdCode: "1-246",
    iso2digitCode: "BB",
    iso3digitCode: "BRB",
  },
  {
    name: "Belarus",
    isdCode: "375",
    iso2digitCode: "BY",
    iso3digitCode: "BLR",
  },
  {
    name: "Belgium",
    isdCode: "32",
    iso2digitCode: "BE",
    iso3digitCode: "BEL",
  },
  {
    name: "Belize",
    isdCode: "501",
    iso2digitCode: "BZ",
    iso3digitCode: "BLZ",
  },
  {
    name: "Benin",
    isdCode: "229",
    iso2digitCode: "BJ",
    iso3digitCode: "BEN",
  },
  {
    name: "Bermuda",
    isdCode: "1-441",
    iso2digitCode: "BM",
    iso3digitCode: "BMU",
  },
  {
    name: "Bhutan",
    isdCode: "975",
    iso2digitCode: "BT",
    iso3digitCode: "BTN",
  },
  {
    name: "Bolivia",
    isdCode: "591",
    iso2digitCode: "BO",
    iso3digitCode: "BOL",
  },
  {
    name: "Bosnia and Herzegovina",
    isdCode: "387",
    iso2digitCode: "BA",
    iso3digitCode: "BIH",
  },
  {
    name: "Botswana",
    isdCode: "267",
    iso2digitCode: "BW",
    iso3digitCode: "BWA",
  },
  {
    name: "Brazil",
    isdCode: "55",
    iso2digitCode: "BR",
    iso3digitCode: "BRA",
  },
  {
    name: "British Indian Ocean Territory",
    isdCode: "246",
    iso2digitCode: "IO",
    iso3digitCode: "IOT",
  },
  {
    name: "British Virgin Islands",
    isdCode: "1-284",
    iso2digitCode: "VG",
    iso3digitCode: "VGB",
  },
  {
    name: "Brunei",
    isdCode: "673",
    iso2digitCode: "BN",
    iso3digitCode: "BRN",
  },
  {
    name: "Bulgaria",
    isdCode: "359",
    iso2digitCode: "BG",
    iso3digitCode: "BGR",
  },
  {
    name: "Burkina Faso",
    isdCode: "226",
    iso2digitCode: "BF",
    iso3digitCode: "BFA",
  },
  {
    name: "Burundi",
    isdCode: "257",
    iso2digitCode: "BI",
    iso3digitCode: "BDI",
  },
  {
    name: "Cambodia",
    isdCode: "855",
    iso2digitCode: "KH",
    iso3digitCode: "KHM",
  },
  {
    name: "Cameroon",
    isdCode: "237",
    iso2digitCode: "CM",
    iso3digitCode: "CMR",
  },
  {
    name: "Canada",
    isdCode: "1",
    iso2digitCode: "CA",
    iso3digitCode: "CAN",
  },
  {
    name: "Cape Verde",
    isdCode: "238",
    iso2digitCode: "CV",
    iso3digitCode: "CPV",
  },
  {
    name: "Cayman Islands",
    isdCode: "1-345",
    iso2digitCode: "KY",
    iso3digitCode: "CYM",
  },
  {
    name: "Central African Republic",
    isdCode: "236",
    iso2digitCode: "CF",
    iso3digitCode: "CAF",
  },
  {
    name: "Chad",
    isdCode: "235",
    iso2digitCode: "TD",
    iso3digitCode: "TCD",
  },
  {
    name: "Chile",
    isdCode: "56",
    iso2digitCode: "CL",
    iso3digitCode: "CHL",
  },
  {
    name: "China",
    isdCode: "86",
    iso2digitCode: "CN",
    iso3digitCode: "CHN",
  },
  {
    name: "Christmas Island",
    isdCode: "61",
    iso2digitCode: "CX",
    iso3digitCode: "CXR",
  },
  {
    name: "Cocos Islands",
    isdCode: "61",
    iso2digitCode: "CC",
    iso3digitCode: "CCK",
  },
  {
    name: "Colombia",
    isdCode: "57",
    iso2digitCode: "CO",
    iso3digitCode: "COL",
  },
  {
    name: "Comoros",
    isdCode: "269",
    iso2digitCode: "KM",
    iso3digitCode: "COM",
  },
  {
    name: "Cook Islands",
    isdCode: "682",
    iso2digitCode: "CK",
    iso3digitCode: "COK",
  },
  {
    name: "Costa Rica",
    isdCode: "506",
    iso2digitCode: "CR",
    iso3digitCode: "CRI",
  },
  {
    name: "Croatia",
    isdCode: "385",
    iso2digitCode: "HR",
    iso3digitCode: "HRV",
  },
  {
    name: "Cuba",
    isdCode: "53",
    iso2digitCode: "CU",
    iso3digitCode: "CUB",
  },
  {
    name: "Curacao",
    isdCode: "599",
    iso2digitCode: "CW",
    iso3digitCode: "CUW",
  },
  {
    name: "Cyprus",
    isdCode: "357",
    iso2digitCode: "CY",
    iso3digitCode: "CYP",
  },
  {
    name: "Czech Republic",
    isdCode: "420",
    iso2digitCode: "CZ",
    iso3digitCode: "CZE",
  },
  {
    name: "Democratic Republic of the Congo",
    isdCode: "243",
    iso2digitCode: "CD",
    iso3digitCode: "COD",
  },
  {
    name: "Denmark",
    isdCode: "45",
    iso2digitCode: "DK",
    iso3digitCode: "DNK",
  },
  {
    name: "Djibouti",
    isdCode: "253",
    iso2digitCode: "DJ",
    iso3digitCode: "DJI",
  },
  {
    name: "Dominica",
    isdCode: "1-767",
    iso2digitCode: "DM",
    iso3digitCode: "DMA",
  },
  {
    name: "Dominican Republic",
    isdCode: "1-809, 1-829, 1-849",
    iso2digitCode: "DO",
    iso3digitCode: "DOM",
  },
  {
    name: "East Timor",
    isdCode: "670",
    iso2digitCode: "TL",
    iso3digitCode: "TLS",
  },
  {
    name: "Ecuador",
    isdCode: "593",
    iso2digitCode: "EC",
    iso3digitCode: "ECU",
  },
  {
    name: "Egypt",
    isdCode: "20",
    iso2digitCode: "EG",
    iso3digitCode: "EGY",
  },
  {
    name: "El Salvador",
    isdCode: "503",
    iso2digitCode: "SV",
    iso3digitCode: "SLV",
  },
  {
    name: "Equatorial Guinea",
    isdCode: "240",
    iso2digitCode: "GQ",
    iso3digitCode: "GNQ",
  },
  {
    name: "Eritrea",
    isdCode: "291",
    iso2digitCode: "ER",
    iso3digitCode: "ERI",
  },
  {
    name: "Estonia",
    isdCode: "372",
    iso2digitCode: "EE",
    iso3digitCode: "EST",
  },
  {
    name: "Ethiopia",
    isdCode: "251",
    iso2digitCode: "ET",
    iso3digitCode: "ETH",
  },
  {
    name: "Falkland Islands",
    isdCode: "500",
    iso2digitCode: "FK",
    iso3digitCode: "FLK",
  },
  {
    name: "Faroe Islands",
    isdCode: "298",
    iso2digitCode: "FO",
    iso3digitCode: "FRO",
  },
  {
    name: "Fiji",
    isdCode: "679",
    iso2digitCode: "FJ",
    iso3digitCode: "FJI",
  },
  {
    name: "Finland",
    isdCode: "358",
    iso2digitCode: "FI",
    iso3digitCode: "FIN",
  },
  {
    name: "France",
    isdCode: "33",
    iso2digitCode: "FR",
    iso3digitCode: "FRA",
  },
  {
    name: "French Polynesia",
    isdCode: "689",
    iso2digitCode: "PF",
    iso3digitCode: "PYF",
  },
  {
    name: "Gabon",
    isdCode: "241",
    iso2digitCode: "GA",
    iso3digitCode: "GAB",
  },
  {
    name: "Gambia",
    isdCode: "220",
    iso2digitCode: "GM",
    iso3digitCode: "GMB",
  },
  {
    name: "Georgia",
    isdCode: "995",
    iso2digitCode: "GE",
    iso3digitCode: "GEO",
  },
  {
    name: "Germany",
    isdCode: "49",
    iso2digitCode: "DE",
    iso3digitCode: "DEU",
  },
  {
    name: "Ghana",
    isdCode: "233",
    iso2digitCode: "GH",
    iso3digitCode: "GHA",
  },
  {
    name: "Gibraltar",
    isdCode: "350",
    iso2digitCode: "GI",
    iso3digitCode: "GIB",
  },
  {
    name: "Greece",
    isdCode: "30",
    iso2digitCode: "GR",
    iso3digitCode: "GRC",
  },
  {
    name: "Greenland",
    isdCode: "299",
    iso2digitCode: "GL",
    iso3digitCode: "GRL",
  },
  {
    name: "Grenada",
    isdCode: "1-473",
    iso2digitCode: "GD",
    iso3digitCode: "GRD",
  },
  {
    name: "Guam",
    isdCode: "1-671",
    iso2digitCode: "GU",
    iso3digitCode: "GUM",
  },
  {
    name: "Guatemala",
    isdCode: "502",
    iso2digitCode: "GT",
    iso3digitCode: "GTM",
  },
  {
    name: "Guernsey",
    isdCode: "44-1481",
    iso2digitCode: "GG",
    iso3digitCode: "GGY",
  },
  {
    name: "Guinea",
    isdCode: "224",
    iso2digitCode: "GN",
    iso3digitCode: "GIN",
  },
  {
    name: "Guinea-Bissau",
    isdCode: "245",
    iso2digitCode: "GW",
    iso3digitCode: "GNB",
  },
  {
    name: "Guyana",
    isdCode: "592",
    iso2digitCode: "GY",
    iso3digitCode: "GUY",
  },
  {
    name: "Haiti",
    isdCode: "509",
    iso2digitCode: "HT",
    iso3digitCode: "HTI",
  },
  {
    name: "Honduras",
    isdCode: "504",
    iso2digitCode: "HN",
    iso3digitCode: "HND",
  },
  {
    name: "Hong Kong",
    isdCode: "852",
    iso2digitCode: "HK",
    iso3digitCode: "HKG",
  },
  {
    name: "Hungary",
    isdCode: "36",
    iso2digitCode: "HU",
    iso3digitCode: "HUN",
  },
  {
    name: "Iceland",
    isdCode: "354",
    iso2digitCode: "IS",
    iso3digitCode: "ISL",
  },
  {
    name: "India",
    isdCode: "91",
    iso2digitCode: "IN",
    iso3digitCode: "IND",
  },
  {
    name: "Indonesia",
    isdCode: "62",
    iso2digitCode: "ID",
    iso3digitCode: "IDN",
  },
  {
    name: "Iran",
    isdCode: "98",
    iso2digitCode: "IR",
    iso3digitCode: "IRN",
  },
  {
    name: "Iraq",
    isdCode: "964",
    iso2digitCode: "IQ",
    iso3digitCode: "IRQ",
  },
  {
    name: "Ireland",
    isdCode: "353",
    iso2digitCode: "IE",
    iso3digitCode: "IRL",
  },
  {
    name: "Isle of Man",
    isdCode: "44-1624",
    iso2digitCode: "IM",
    iso3digitCode: "IMN",
  },
  {
    name: "Israel",
    isdCode: "972",
    iso2digitCode: "IL",
    iso3digitCode: "ISR",
  },
  {
    name: "Italy",
    isdCode: "39",
    iso2digitCode: "IT",
    iso3digitCode: "ITA",
  },
  {
    name: "Ivory Coast",
    isdCode: "225",
    iso2digitCode: "CI",
    iso3digitCode: "CIV",
  },
  {
    name: "Jamaica",
    isdCode: "1-876",
    iso2digitCode: "JM",
    iso3digitCode: "JAM",
  },
  {
    name: "Japan",
    isdCode: "81",
    iso2digitCode: "JP",
    iso3digitCode: "JPN",
  },
  {
    name: "Jersey",
    isdCode: "44-1534",
    iso2digitCode: "JE",
    iso3digitCode: "JEY",
  },
  {
    name: "Jordan",
    isdCode: "962",
    iso2digitCode: "JO",
    iso3digitCode: "JOR",
  },
  {
    name: "Kazakhstan",
    isdCode: "7",
    iso2digitCode: "KZ",
    iso3digitCode: "KAZ",
  },
  {
    name: "Kenya",
    isdCode: "254",
    iso2digitCode: "KE",
    iso3digitCode: "KEN",
  },
  {
    name: "Kiribati",
    isdCode: "686",
    iso2digitCode: "KI",
    iso3digitCode: "KIR",
  },
  {
    name: "Kosovo",
    isdCode: "383",
    iso2digitCode: "XK",
    iso3digitCode: "XKX",
  },
  {
    name: "Kuwait",
    isdCode: "965",
    iso2digitCode: "KW",
    iso3digitCode: "KWT",
  },
  {
    name: "Kyrgyzstan",
    isdCode: "996",
    iso2digitCode: "KG",
    iso3digitCode: "KGZ",
  },
  {
    name: "Laos",
    isdCode: "856",
    iso2digitCode: "LA",
    iso3digitCode: "LAO",
  },
  {
    name: "Latvia",
    isdCode: "371",
    iso2digitCode: "LV",
    iso3digitCode: "LVA",
  },
  {
    name: "Lebanon",
    isdCode: "961",
    iso2digitCode: "LB",
    iso3digitCode: "LBN",
  },
  {
    name: "Lesotho",
    isdCode: "266",
    iso2digitCode: "LS",
    iso3digitCode: "LSO",
  },
  {
    name: "Liberia",
    isdCode: "231",
    iso2digitCode: "LR",
    iso3digitCode: "LBR",
  },
  {
    name: "Libya",
    isdCode: "218",
    iso2digitCode: "LY",
    iso3digitCode: "LBY",
  },
  {
    name: "Liechtenstein",
    isdCode: "423",
    iso2digitCode: "LI",
    iso3digitCode: "LIE",
  },
  {
    name: "Lithuania",
    isdCode: "370",
    iso2digitCode: "LT",
    iso3digitCode: "LTU",
  },
  {
    name: "Luxembourg",
    isdCode: "352",
    iso2digitCode: "LU",
    iso3digitCode: "LUX",
  },
  {
    name: "Macau",
    isdCode: "853",
    iso2digitCode: "MO",
    iso3digitCode: "MAC",
  },
  {
    name: "Macedonia",
    isdCode: "389",
    iso2digitCode: "MK",
    iso3digitCode: "MKD",
  },
  {
    name: "Madagascar",
    isdCode: "261",
    iso2digitCode: "MG",
    iso3digitCode: "MDG",
  },
  {
    name: "Malawi",
    isdCode: "265",
    iso2digitCode: "MW",
    iso3digitCode: "MWI",
  },
  {
    name: "Malaysia",
    isdCode: "60",
    iso2digitCode: "MY",
    iso3digitCode: "MYS",
  },
  {
    name: "Maldives",
    isdCode: "960",
    iso2digitCode: "MV",
    iso3digitCode: "MDV",
  },
  {
    name: "Mali",
    isdCode: "223",
    iso2digitCode: "ML",
    iso3digitCode: "MLI",
  },
  {
    name: "Malta",
    isdCode: "356",
    iso2digitCode: "MT",
    iso3digitCode: "MLT",
  },
  {
    name: "Marshall Islands",
    isdCode: "692",
    iso2digitCode: "MH",
    iso3digitCode: "MHL",
  },
  {
    name: "Mauritania",
    isdCode: "222",
    iso2digitCode: "MR",
    iso3digitCode: "MRT",
  },
  {
    name: "Mauritius",
    isdCode: "230",
    iso2digitCode: "MU",
    iso3digitCode: "MUS",
  },
  {
    name: "Mayotte",
    isdCode: "262",
    iso2digitCode: "YT",
    iso3digitCode: "MYT",
  },
  {
    name: "Mexico",
    isdCode: "52",
    iso2digitCode: "MX",
    iso3digitCode: "MEX",
  },
  {
    name: "Micronesia",
    isdCode: "691",
    iso2digitCode: "FM",
    iso3digitCode: "FSM",
  },
  {
    name: "Moldova",
    isdCode: "373",
    iso2digitCode: "MD",
    iso3digitCode: "MDA",
  },
  {
    name: "Monaco",
    isdCode: "377",
    iso2digitCode: "MC",
    iso3digitCode: "MCO",
  },
  {
    name: "Mongolia",
    isdCode: "976",
    iso2digitCode: "MN",
    iso3digitCode: "MNG",
  },
  {
    name: "Montenegro",
    isdCode: "382",
    iso2digitCode: "ME",
    iso3digitCode: "MNE",
  },
  {
    name: "Montserrat",
    isdCode: "1-664",
    iso2digitCode: "MS",
    iso3digitCode: "MSR",
  },
  {
    name: "Morocco",
    isdCode: "212",
    iso2digitCode: "MA",
    iso3digitCode: "MAR",
  },
  {
    name: "Mozambique",
    isdCode: "258",
    iso2digitCode: "MZ",
    iso3digitCode: "MOZ",
  },
  {
    name: "Myanmar",
    isdCode: "95",
    iso2digitCode: "MM",
    iso3digitCode: "MMR",
  },
  {
    name: "Namibia",
    isdCode: "264",
    iso2digitCode: "NA",
    iso3digitCode: "NAM",
  },
  {
    name: "Nauru",
    isdCode: "674",
    iso2digitCode: "NR",
    iso3digitCode: "NRU",
  },
  {
    name: "Nepal",
    isdCode: "977",
    iso2digitCode: "NP",
    iso3digitCode: "NPL",
  },
  {
    name: "Netherlands",
    isdCode: "31",
    iso2digitCode: "NL",
    iso3digitCode: "NLD",
  },
  {
    name: "Netherlands Antilles",
    isdCode: "599",
    iso2digitCode: "AN",
    iso3digitCode: "ANT",
  },
  {
    name: "New Caledonia",
    isdCode: "687",
    iso2digitCode: "NC",
    iso3digitCode: "NCL",
  },
  {
    name: "New Zealand",
    isdCode: "64",
    iso2digitCode: "NZ",
    iso3digitCode: "NZL",
  },
  {
    name: "Nicaragua",
    isdCode: "505",
    iso2digitCode: "NI",
    iso3digitCode: "NIC",
  },
  {
    name: "Niger",
    isdCode: "227",
    iso2digitCode: "NE",
    iso3digitCode: "NER",
  },
  {
    name: "Nigeria",
    isdCode: "234",
    iso2digitCode: "NG",
    iso3digitCode: "NGA",
  },
  {
    name: "Niue",
    isdCode: "683",
    iso2digitCode: "NU",
    iso3digitCode: "NIU",
  },
  {
    name: "North Korea",
    isdCode: "850",
    iso2digitCode: "KP",
    iso3digitCode: "PRK",
  },
  {
    name: "Northern Mariana Islands",
    isdCode: "1-670",
    iso2digitCode: "MP",
    iso3digitCode: "MNP",
  },
  {
    name: "Norway",
    isdCode: "47",
    iso2digitCode: "NO",
    iso3digitCode: "NOR",
  },
  {
    name: "Oman",
    isdCode: "968",
    iso2digitCode: "OM",
    iso3digitCode: "OMN",
  },
  {
    name: "Pakistan",
    isdCode: "92",
    iso2digitCode: "PK",
    iso3digitCode: "PAK",
  },
  {
    name: "Palau",
    isdCode: "680",
    iso2digitCode: "PW",
    iso3digitCode: "PLW",
  },
  {
    name: "Palestine",
    isdCode: "970",
    iso2digitCode: "PS",
    iso3digitCode: "PSE",
  },
  {
    name: "Panama",
    isdCode: "507",
    iso2digitCode: "PA",
    iso3digitCode: "PAN",
  },
  {
    name: "Papua New Guinea",
    isdCode: "675",
    iso2digitCode: "PG",
    iso3digitCode: "PNG",
  },
  {
    name: "Paraguay",
    isdCode: "595",
    iso2digitCode: "PY",
    iso3digitCode: "PRY",
  },
  {
    name: "Peru",
    isdCode: "51",
    iso2digitCode: "PE",
    iso3digitCode: "PER",
  },
  {
    name: "Philippines",
    isdCode: "63",
    iso2digitCode: "PH",
    iso3digitCode: "PHL",
  },
  {
    name: "Pitcairn",
    isdCode: "64",
    iso2digitCode: "PN",
    iso3digitCode: "PCN",
  },
  {
    name: "Poland",
    isdCode: "48",
    iso2digitCode: "PL",
    iso3digitCode: "POL",
  },
  {
    name: "Portugal",
    isdCode: "351",
    iso2digitCode: "PT",
    iso3digitCode: "PRT",
  },
  {
    name: "Puerto Rico",
    isdCode: "1-787, 1-939",
    iso2digitCode: "PR",
    iso3digitCode: "PRI",
  },
  {
    name: "Qatar",
    isdCode: "974",
    iso2digitCode: "QA",
    iso3digitCode: "QAT",
  },
  {
    name: "Republic of the Congo",
    isdCode: "242",
    iso2digitCode: "CG",
    iso3digitCode: "COG",
  },
  {
    name: "Reunion",
    isdCode: "262",
    iso2digitCode: "RE",
    iso3digitCode: "REU",
  },
  {
    name: "Romania",
    isdCode: "40",
    iso2digitCode: "RO",
    iso3digitCode: "ROU",
  },
  {
    name: "Russia",
    isdCode: "7",
    iso2digitCode: "RU",
    iso3digitCode: "RUS",
  },
  {
    name: "Rwanda",
    isdCode: "250",
    iso2digitCode: "RW",
    iso3digitCode: "RWA",
  },
  {
    name: "Saint Barthelemy",
    isdCode: "590",
    iso2digitCode: "BL",
    iso3digitCode: "BLM",
  },
  {
    name: "Saint Helena",
    isdCode: "290",
    iso2digitCode: "SH",
    iso3digitCode: "SHN",
  },
  {
    name: "Saint Kitts and Nevis",
    isdCode: "1-869",
    iso2digitCode: "KN",
    iso3digitCode: "KNA",
  },
  {
    name: "Saint Lucia",
    isdCode: "1-758",
    iso2digitCode: "LC",
    iso3digitCode: "LCA",
  },
  {
    name: "Saint Martin",
    isdCode: "590",
    iso2digitCode: "MF",
    iso3digitCode: "MAF",
  },
  {
    name: "Saint Pierre and Miquelon",
    isdCode: "508",
    iso2digitCode: "PM",
    iso3digitCode: "SPM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    isdCode: "1-784",
    iso2digitCode: "VC",
    iso3digitCode: "VCT",
  },
  {
    name: "Samoa",
    isdCode: "685",
    iso2digitCode: "WS",
    iso3digitCode: "WSM",
  },
  {
    name: "San Marino",
    isdCode: "378",
    iso2digitCode: "SM",
    iso3digitCode: "SMR",
  },
  {
    name: "Sao Tome and Principe",
    isdCode: "239",
    iso2digitCode: "ST",
    iso3digitCode: "STP",
  },
  {
    name: "Saudi Arabia",
    isdCode: "966",
    iso2digitCode: "SA",
    iso3digitCode: "SAU",
  },
  {
    name: "Senegal",
    isdCode: "221",
    iso2digitCode: "SN",
    iso3digitCode: "SEN",
  },
  {
    name: "Serbia",
    isdCode: "381",
    iso2digitCode: "RS",
    iso3digitCode: "SRB",
  },
  {
    name: "Seychelles",
    isdCode: "248",
    iso2digitCode: "SC",
    iso3digitCode: "SYC",
  },
  {
    name: "Sierra Leone",
    isdCode: "232",
    iso2digitCode: "SL",
    iso3digitCode: "SLE",
  },
  {
    name: "Singapore",
    isdCode: "65",
    iso2digitCode: "SG",
    iso3digitCode: "SGP",
  },
  {
    name: "Sint Maarten",
    isdCode: "1-721",
    iso2digitCode: "SX",
    iso3digitCode: "SXM",
  },
  {
    name: "Slovakia",
    isdCode: "421",
    iso2digitCode: "SK",
    iso3digitCode: "SVK",
  },
  {
    name: "Slovenia",
    isdCode: "386",
    iso2digitCode: "SI",
    iso3digitCode: "SVN",
  },
  {
    name: "Solomon Islands",
    isdCode: "677",
    iso2digitCode: "SB",
    iso3digitCode: "SLB",
  },
  {
    name: "Somalia",
    isdCode: "252",
    iso2digitCode: "SO",
    iso3digitCode: "SOM",
  },
  {
    name: "South Africa",
    isdCode: "27",
    iso2digitCode: "ZA",
    iso3digitCode: "ZAF",
  },
  {
    name: "South Korea",
    isdCode: "82",
    iso2digitCode: "KR",
    iso3digitCode: "KOR",
  },
  {
    name: "South Sudan",
    isdCode: "211",
    iso2digitCode: "SS",
    iso3digitCode: "SSD",
  },
  {
    name: "Spain",
    isdCode: "34",
    iso2digitCode: "ES",
    iso3digitCode: "ESP",
  },
  {
    name: "Sri Lanka",
    isdCode: "94",
    iso2digitCode: "LK",
    iso3digitCode: "LKA",
  },
  {
    name: "Sudan",
    isdCode: "249",
    iso2digitCode: "SD",
    iso3digitCode: "SDN",
  },
  {
    name: "Suriname",
    isdCode: "597",
    iso2digitCode: "SR",
    iso3digitCode: "SUR",
  },
  {
    name: "Svalbard and Jan Mayen",
    isdCode: "47",
    iso2digitCode: "SJ",
    iso3digitCode: "SJM",
  },
  {
    name: "Swaziland",
    isdCode: "268",
    iso2digitCode: "SZ",
    iso3digitCode: "SWZ",
  },
  {
    name: "Sweden",
    isdCode: "46",
    iso2digitCode: "SE",
    iso3digitCode: "SWE",
  },
  {
    name: "Switzerland",
    isdCode: "41",
    iso2digitCode: "CH",
    iso3digitCode: "CHE",
  },
  {
    name: "Syria",
    isdCode: "963",
    iso2digitCode: "SY",
    iso3digitCode: "SYR",
  },
  {
    name: "Taiwan",
    isdCode: "886",
    iso2digitCode: "TW",
    iso3digitCode: "TWN",
  },
  {
    name: "Tajikistan",
    isdCode: "992",
    iso2digitCode: "TJ",
    iso3digitCode: "TJK",
  },
  {
    name: "Tanzania",
    isdCode: "255",
    iso2digitCode: "TZ",
    iso3digitCode: "TZA",
  },
  {
    name: "Thailand",
    isdCode: "66",
    iso2digitCode: "TH",
    iso3digitCode: "THA",
  },
  {
    name: "Togo",
    isdCode: "228",
    iso2digitCode: "TG",
    iso3digitCode: "TGO",
  },
  {
    name: "Tokelau",
    isdCode: "690",
    iso2digitCode: "TK",
    iso3digitCode: "TKL",
  },
  {
    name: "Tonga",
    isdCode: "676",
    iso2digitCode: "TO",
    iso3digitCode: "TON",
  },
  {
    name: "Trinidad and Tobago",
    isdCode: "1-868",
    iso2digitCode: "TT",
    iso3digitCode: "TTO",
  },
  {
    name: "Tunisia",
    isdCode: "216",
    iso2digitCode: "TN",
    iso3digitCode: "TUN",
  },
  {
    name: "Turkey",
    isdCode: "90",
    iso2digitCode: "TR",
    iso3digitCode: "TUR",
  },
  {
    name: "Turkmenistan",
    isdCode: "993",
    iso2digitCode: "TM",
    iso3digitCode: "TKM",
  },
  {
    name: "Turks and Caicos Islands",
    isdCode: "1-649",
    iso2digitCode: "TC",
    iso3digitCode: "TCA",
  },
  {
    name: "Tuvalu",
    isdCode: "688",
    iso2digitCode: "TV",
    iso3digitCode: "TUV",
  },
  {
    name: "U.S. Virgin Islands",
    isdCode: "1-340",
    iso2digitCode: "VI",
    iso3digitCode: "VIR",
  },
  {
    name: "Uganda",
    isdCode: "256",
    iso2digitCode: "UG",
    iso3digitCode: "UGA",
  },
  {
    name: "Ukraine",
    isdCode: "380",
    iso2digitCode: "UA",
    iso3digitCode: "UKR",
  },
  {
    name: "United Arab Emirates",
    isdCode: "971",
    iso2digitCode: "AE",
    iso3digitCode: "ARE",
  },
  {
    name: "United Kingdom",
    isdCode: "44",
    iso2digitCode: "GB",
    iso3digitCode: "GBR",
  },
  {
    name: "United States",
    isdCode: "1",
    iso2digitCode: "US",
    iso3digitCode: "USA",
  },
  {
    name: "Uruguay",
    isdCode: "598",
    iso2digitCode: "UY",
    iso3digitCode: "URY",
  },
  {
    name: "Uzbekistan",
    isdCode: "998",
    iso2digitCode: "UZ",
    iso3digitCode: "UZB",
  },
  {
    name: "Vanuatu",
    isdCode: "678",
    iso2digitCode: "VU",
    iso3digitCode: "VUT",
  },
  {
    name: "Vatican",
    isdCode: "379",
    iso2digitCode: "VA",
    iso3digitCode: "VAT",
  },
  {
    name: "Venezuela",
    isdCode: "58",
    iso2digitCode: "VE",
    iso3digitCode: "VEN",
  },
  {
    name: "Vietnam",
    isdCode: "84",
    iso2digitCode: "VN",
    iso3digitCode: "VNM",
  },
  {
    name: "Wallis and Futuna",
    isdCode: "681",
    iso2digitCode: "WF",
    iso3digitCode: "WLF",
  },
  {
    name: "Western Sahara",
    isdCode: "212",
    iso2digitCode: "EH",
    iso3digitCode: "ESH",
  },
  {
    name: "Yemen",
    isdCode: "967",
    iso2digitCode: "YE",
    iso3digitCode: "YEM",
  },
  {
    name: "Zambia",
    isdCode: "260",
    iso2digitCode: "ZM",
    iso3digitCode: "ZMB",
  },
  {
    name: "Zimbabwe",
    isdCode: "263",
    iso2digitCode: "ZW",
    iso3digitCode: "ZWE",
  },
];
