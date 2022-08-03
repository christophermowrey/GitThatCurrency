var ipAccess = $("#ipAccess");
var modalYes = $("#modalYes");
var modalNo = $("#modalNo");
var modal = $("#myModal");
var span = $(".close");
var countryVisiting = $("#countryvisiting");
var currencyAmt = $("#currencyamt");
var currencyInput = $("#currencyinput");
var calculated = $("#calculated");
var countriesVisitingList = $("#countriesvisiting");
countryMatrixObject = {
	"af": {
		"country_name": "afghanistan",
		"country_iso3": "afg",
		"country_iso_numeric": "4",
		"currency_name": "afghani",
		"currency_code": "afn",
		"currency_number": "971"
	},
	"al": {
		"country_name": "albania",
		"country_iso3": "alb",
		"country_iso_numeric": "8",
		"currency_name": "lek",
		"currency_code": "all",
		"currency_number": "8"
	},
	"dz": {
		"country_name": "algeria",
		"country_iso3": "dza",
		"country_iso_numeric": "12",
		"currency_name": "algerian dinar",
		"currency_code": "dzd",
		"currency_number": "12"
	},
	"as": {
		"country_name": "american samoa",
		"country_iso3": "asm",
		"country_iso_numeric": "16",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"ad": {
		"country_name": "andorra",
		"country_iso3": "and",
		"country_iso_numeric": "20",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"ao": {
		"country_name": "angola",
		"country_iso3": "ago",
		"country_iso_numeric": "24",
		"currency_name": "kwanza",
		"currency_code": "aoa",
		"currency_number": "973"
	},
	"ai": {
		"country_name": "anguilla",
		"country_iso3": "aia",
		"country_iso_numeric": "660",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"aq": {
		"country_name": "antarctica",
		"country_iso3": "ata",
		"country_iso_numeric": "10",
		"currency_name": "no universal currency",
		"currency_code": "",
		"currency_number": ""
	},
	"ag": {
		"country_name": "antigua and barbuda",
		"country_iso3": "atg",
		"country_iso_numeric": "28",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"ar": {
		"country_name": "argentina",
		"country_iso3": "arg",
		"country_iso_numeric": "32",
		"currency_name": "argentine peso",
		"currency_code": "ars",
		"currency_number": "32"
	},
	"am": {
		"country_name": "armenia",
		"country_iso3": "arm",
		"country_iso_numeric": "51",
		"currency_name": "armenian dram",
		"currency_code": "amd",
		"currency_number": "51"
	},
	"aw": {
		"country_name": "aruba",
		"country_iso3": "abw",
		"country_iso_numeric": "533",
		"currency_name": "aruban florin",
		"currency_code": "awg",
		"currency_number": "533"
	},
	"au": {
		"country_name": "australia",
		"country_iso3": "aus",
		"country_iso_numeric": "36",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"at": {
		"country_name": "austria",
		"country_iso3": "aut",
		"country_iso_numeric": "40",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"az": {
		"country_name": "azerbaijan",
		"country_iso3": "aze",
		"country_iso_numeric": "31",
		"currency_name": "azerbaijanian manat",
		"currency_code": "azn",
		"currency_number": "944"
	},
	"bs": {
		"country_name": "bahamas (the)",
		"country_iso3": "bhs",
		"country_iso_numeric": "44",
		"currency_name": "bahamian dollar",
		"currency_code": "bsd",
		"currency_number": "44"
	},
	"bh": {
		"country_name": "bahrain",
		"country_iso3": "bhr",
		"country_iso_numeric": "48",
		"currency_name": "bahraini dinar",
		"currency_code": "bhd",
		"currency_number": "48"
	},
	"bd": {
		"country_name": "bangladesh",
		"country_iso3": "bgd",
		"country_iso_numeric": "50",
		"currency_name": "taka",
		"currency_code": "bdt",
		"currency_number": "50"
	},
	"bb": {
		"country_name": "barbados",
		"country_iso3": "brb",
		"country_iso_numeric": "52",
		"currency_name": "barbados dollar",
		"currency_code": "bbd",
		"currency_number": "52"
	},
	"by": {
		"country_name": "belarus",
		"country_iso3": "blr",
		"country_iso_numeric": "112",
		"currency_name": "belarussian ruble",
		"currency_code": "byn",
		"currency_number": "933"
	},
	"be": {
		"country_name": "belgium",
		"country_iso3": "bel",
		"country_iso_numeric": "56",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"bz": {
		"country_name": "belize",
		"country_iso3": "blz",
		"country_iso_numeric": "84",
		"currency_name": "belize dollar",
		"currency_code": "bzd",
		"currency_number": "84"
	},
	"bj": {
		"country_name": "benin",
		"country_iso3": "ben",
		"country_iso_numeric": "204",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"bm": {
		"country_name": "bermuda",
		"country_iso3": "bmu",
		"country_iso_numeric": "60",
		"currency_name": "bermudian dollar",
		"currency_code": "bmd",
		"currency_number": "60"
	},
	"bt": {
		"country_name": "bhutan",
		"country_iso3": "btn",
		"country_iso_numeric": "64",
		"currency_name": "ngultrum",
		"currency_code": "btn",
		"currency_number": "64"
	},
	"bo": {
		"country_name": "bolivia (plurinational state of)",
		"country_iso3": "bol",
		"country_iso_numeric": "68",
		"currency_name": "boliviano",
		"currency_code": "bob",
		"currency_number": "68"
	},
	" sint eustatius and saba": {
		"country_name": "bonaire",
		"country_iso3": "bq",
		"country_iso_numeric": "bes",
		"currency_name": " sint eustatius and saba",
		"currency_code": "us dollar",
		"currency_number": "usd"
	},
	"ba": {
		"country_name": "bosnia and herzegovina",
		"country_iso3": "bih",
		"country_iso_numeric": "70",
		"currency_name": "convertible mark",
		"currency_code": "bam",
		"currency_number": "977"
	},
	"bw": {
		"country_name": "botswana",
		"country_iso3": "bwa",
		"country_iso_numeric": "72",
		"currency_name": "pula",
		"currency_code": "bwp",
		"currency_number": "72"
	},
	"bv": {
		"country_name": "bouvet island",
		"country_iso3": "bvt",
		"country_iso_numeric": "74",
		"currency_name": "norwegian krone",
		"currency_code": "nok",
		"currency_number": "578"
	},
	"br": {
		"country_name": "brazil",
		"country_iso3": "bra",
		"country_iso_numeric": "76",
		"currency_name": "brazilian real",
		"currency_code": "brl",
		"currency_number": "986"
	},
	"io": {
		"country_name": "british indian ocean territory (the)",
		"country_iso3": "iot",
		"country_iso_numeric": "86",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"bn": {
		"country_name": "brunei darussalam",
		"country_iso3": "brn",
		"country_iso_numeric": "96",
		"currency_name": "brunei dollar",
		"currency_code": "bnd",
		"currency_number": "96"
	},
	"bg": {
		"country_name": "bulgaria",
		"country_iso3": "bgr",
		"country_iso_numeric": "100",
		"currency_name": "bulgarian lev",
		"currency_code": "bgn",
		"currency_number": "975"
	},
	"bf": {
		"country_name": "burkina faso",
		"country_iso3": "bfa",
		"country_iso_numeric": "854",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"bi": {
		"country_name": "burundi",
		"country_iso3": "bdi",
		"country_iso_numeric": "108",
		"currency_name": "burundi franc",
		"currency_code": "bif",
		"currency_number": "108"
	},
	"cv": {
		"country_name": "cabo verde",
		"country_iso3": "cpv",
		"country_iso_numeric": "132",
		"currency_name": "cabo verde escudo",
		"currency_code": "cve",
		"currency_number": "132"
	},
	"kh": {
		"country_name": "cambodia",
		"country_iso3": "khm",
		"country_iso_numeric": "116",
		"currency_name": "riel",
		"currency_code": "khr",
		"currency_number": "116"
	},
	"cm": {
		"country_name": "cameroon",
		"country_iso3": "cmr",
		"country_iso_numeric": "120",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"ca": {
		"country_name": "canada",
		"country_iso3": "can",
		"country_iso_numeric": "124",
		"currency_name": "canadian dollar",
		"currency_code": "cad",
		"currency_number": "124"
	},
	"ky": {
		"country_name": "cayman islands (the)",
		"country_iso3": "cym",
		"country_iso_numeric": "136",
		"currency_name": "cayman islands dollar",
		"currency_code": "kyd",
		"currency_number": "136"
	},
	"cf": {
		"country_name": "central african republic (the)",
		"country_iso3": "caf",
		"country_iso_numeric": "140",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"td": {
		"country_name": "chad",
		"country_iso3": "tcd",
		"country_iso_numeric": "148",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"cl": {
		"country_name": "chile",
		"country_iso3": "chl",
		"country_iso_numeric": "152",
		"currency_name": "chilean peso",
		"currency_code": "clp",
		"currency_number": "152"
	},
	"cn": {
		"country_name": "china",
		"country_iso3": "chn",
		"country_iso_numeric": "156",
		"currency_name": "yuan renminbi",
		"currency_code": "cny",
		"currency_number": "156"
	},
	"cx": {
		"country_name": "christmas island",
		"country_iso3": "cxr",
		"country_iso_numeric": "162",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"cc": {
		"country_name": "cocos (keeling) islands (the)",
		"country_iso3": "cck",
		"country_iso_numeric": "166",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"co": {
		"country_name": "colombia",
		"country_iso3": "col",
		"country_iso_numeric": "170",
		"currency_name": "colombian peso",
		"currency_code": "cop",
		"currency_number": "170"
	},
	"km": {
		"country_name": "comoros (the)",
		"country_iso3": "com",
		"country_iso_numeric": "174",
		"currency_name": "comoro franc",
		"currency_code": "kmf",
		"currency_number": "174"
	},
	"cd": {
		"country_name": "congo (the democratic republic of the)",
		"country_iso3": "cod",
		"country_iso_numeric": "180",
		"currency_name": "congolese franc",
		"currency_code": "cdf",
		"currency_number": "976"
	},
	"cg": {
		"country_name": "congo (the)",
		"country_iso3": "cog",
		"country_iso_numeric": "178",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"ck": {
		"country_name": "cook islands (the)",
		"country_iso3": "cok",
		"country_iso_numeric": "184",
		"currency_name": "new zealand dollar",
		"currency_code": "nzd",
		"currency_number": "554"
	},
	"cr": {
		"country_name": "costa rica",
		"country_iso3": "cri",
		"country_iso_numeric": "188",
		"currency_name": "costa rican colon",
		"currency_code": "crc",
		"currency_number": "188"
	},
	"hr": {
		"country_name": "croatia",
		"country_iso3": "hrv",
		"country_iso_numeric": "191",
		"currency_name": "kuna",
		"currency_code": "hrk",
		"currency_number": "191"
	},
	"cu": {
		"country_name": "cuba",
		"country_iso3": "cub",
		"country_iso_numeric": "192",
		"currency_name": "cuban peso",
		"currency_code": "cup",
		"currency_number": "192"
	},
	"cw": {
		"country_name": "cura�ao",
		"country_iso3": "cuw",
		"country_iso_numeric": "531",
		"currency_name": "netherlands antillean guilder",
		"currency_code": "ang",
		"currency_number": "532"
	},
	"cy": {
		"country_name": "cyprus",
		"country_iso3": "cyp",
		"country_iso_numeric": "196",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"ci": {
		"country_name": "c�te d'ivoire",
		"country_iso3": "civ",
		"country_iso_numeric": "384",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"dk": {
		"country_name": "denmark",
		"country_iso3": "dnk",
		"country_iso_numeric": "208",
		"currency_name": "danish krone",
		"currency_code": "dkk",
		"currency_number": "208"
	},
	"dj": {
		"country_name": "djibouti",
		"country_iso3": "dji",
		"country_iso_numeric": "262",
		"currency_name": "djibouti franc",
		"currency_code": "djf",
		"currency_number": "262"
	},
	"dm": {
		"country_name": "dominica",
		"country_iso3": "dma",
		"country_iso_numeric": "212",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"do": {
		"country_name": "dominican republic (the)",
		"country_iso3": "dom",
		"country_iso_numeric": "214",
		"currency_name": "dominican peso",
		"currency_code": "dop",
		"currency_number": "214"
	},
	"ec": {
		"country_name": "ecuador",
		"country_iso3": "ecu",
		"country_iso_numeric": "218",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"eg": {
		"country_name": "egypt",
		"country_iso3": "egy",
		"country_iso_numeric": "818",
		"currency_name": "egyptian pound",
		"currency_code": "egp",
		"currency_number": "818"
	},
	"sv": {
		"country_name": "el salvador",
		"country_iso3": "slv",
		"country_iso_numeric": "222",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"	
	},
	"gq": {
		"country_name": "equatorial guinea",
		"country_iso3": "gnq",
		"country_iso_numeric": "226",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"er": {
		"country_name": "eritrea",
		"country_iso3": "eri",
		"country_iso_numeric": "232",
		"currency_name": "nakfa",
		"currency_code": "ern",
		"currency_number": "232"
	},
	"ee": {
		"country_name": "estonia",
		"country_iso3": "est",
		"country_iso_numeric": "233",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"et": {
		"country_name": "ethiopia",
		"country_iso3": "eth",
		"country_iso_numeric": "231",
		"currency_name": "ethiopian birr",
		"currency_code": "etb",
		"currency_number": "230"
	},
	"fk": {
		"country_name": "falkland islands (the) [malvinas]",
		"country_iso3": "flk",
		"country_iso_numeric": "238",
		"currency_name": "falkland islands pound",
		"currency_code": "fkp",
		"currency_number": "238"
	},
	"fo": {
		"country_name": "faroe islands (the)",
		"country_iso3": "fro",
		"country_iso_numeric": "234",
		"currency_name": "danish krone",
		"currency_code": "dkk",
		"currency_number": "208"
	},
	"fj": {
		"country_name": "fiji",
		"country_iso3": "fji",
		"country_iso_numeric": "242",
		"currency_name": "fiji dollar",
		"currency_code": "fjd",
		"currency_number": "242"
	},
	"fi": {
		"country_name": "finland",
		"country_iso3": "fin",
		"country_iso_numeric": "246",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"fr": {
		"country_name": "france",
		"country_iso3": "fra",
		"country_iso_numeric": "250",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"gf": {
		"country_name": "french guiana",
		"country_iso3": "guf",
		"country_iso_numeric": "254",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"pf": {
		"country_name": "french polynesia",
		"country_iso3": "pyf",
		"country_iso_numeric": "258",
		"currency_name": "cfp franc",
		"currency_code": "xpf",
		"currency_number": "953"
	},
	"tf": {
		"country_name": "french southern territories (the)",
		"country_iso3": "atf",
		"country_iso_numeric": "260",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"ga": {
		"country_name": "gabon",
		"country_iso3": "gab",
		"country_iso_numeric": "266",
		"currency_name": "cfa franc beac",
		"currency_code": "xaf",
		"currency_number": "950"
	},
	"gm": {
		"country_name": "gambia (the)",
		"country_iso3": "gmb",
		"country_iso_numeric": "270",
		"currency_name": "dalasi",
		"currency_code": "gmd",
		"currency_number": "270"
	},
	"ge": {
		"country_name": "georgia",
		"country_iso3": "geo",
		"country_iso_numeric": "268",
		"currency_name": "lari",
		"currency_code": "gel",
		"currency_number": "981"
	},
	"de": {
		"country_name": "germany",
		"country_iso3": "deu",
		"country_iso_numeric": "276",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"gh": {
		"country_name": "ghana",
		"country_iso3": "gha",
		"country_iso_numeric": "288",
		"currency_name": "ghana cedi",
		"currency_code": "ghs",
		"currency_number": "936"
	},
	"gi": {
		"country_name": "gibraltar",
		"country_iso3": "gib",
		"country_iso_numeric": "292",
		"currency_name": "gibraltar pound",
		"currency_code": "gip",
		"currency_number": "292"
	},
	"gr": {
		"country_name": "greece",
		"country_iso3": "grc",
		"country_iso_numeric": "300",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"gl": {
		"country_name": "greenland",
		"country_iso3": "grl",
		"country_iso_numeric": "304",
		"currency_name": "danish krone",
		"currency_code": "dkk",
		"currency_number": "208"
	},
	"gd": {
		"country_name": "grenada",
		"country_iso3": "grd",
		"country_iso_numeric": "308",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"gp": {
		"country_name": "guadeloupe",
		"country_iso3": "glp",
		"country_iso_numeric": "312",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"gu": {
		"country_name": "guam",
		"country_iso3": "gum",
		"country_iso_numeric": "316",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"gt": {
		"country_name": "guatemala",
		"country_iso3": "gtm",
		"country_iso_numeric": "320",
		"currency_name": "quetzal",
		"currency_code": "gtq",
		"currency_number": "320"
	},
	"gg": {
		"country_name": "guernsey",
		"country_iso3": "ggy",
		"country_iso_numeric": "831",
		"currency_name": "pound sterling",
		"currency_code": "gbp",
		"currency_number": "826"
	},
	"gn": {
		"country_name": "guinea",
		"country_iso3": "gin",
		"country_iso_numeric": "324",
		"currency_name": "guinea franc",
		"currency_code": "gnf",
		"currency_number": "324"
	},
	"gw": {
		"country_name": "guinea-bissau",
		"country_iso3": "gnb",
		"country_iso_numeric": "624",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"gy": {
		"country_name": "guyana",
		"country_iso3": "guy",
		"country_iso_numeric": "328",
		"currency_name": "guyana dollar",
		"currency_code": "gyd",
		"currency_number": "328"
	},
	"ht": {
		"country_name": "haiti",
		"country_iso3": "hti",
		"country_iso_numeric": "332",
		"currency_name": "gourde",
		"currency_code": "htg",
		"currency_number": "332"
	},
	"hm": {
		"country_name": "heard island and mcdonald islands",
		"country_iso3": "hmd",
		"country_iso_numeric": "334",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"va": {
		"country_name": "holy see (the)",
		"country_iso3": "vat",
		"country_iso_numeric": "336",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"hn": {
		"country_name": "honduras",
		"country_iso3": "hnd",
		"country_iso_numeric": "340",
		"currency_name": "lempira",
		"currency_code": "hnl",
		"currency_number": "340"
	},
	"hk": {
		"country_name": "hong kong",
		"country_iso3": "hkg",
		"country_iso_numeric": "344",
		"currency_name": "hong kong dollar",
		"currency_code": "hkd",
		"currency_number": "344"
	},
	"hu": {
		"country_name": "hungary",
		"country_iso3": "hun",
		"country_iso_numeric": "348",
		"currency_name": "forint",
		"currency_code": "huf",
		"currency_number": "348"
	},
	"is": {
		"country_name": "iceland",
		"country_iso3": "isl",
		"country_iso_numeric": "352",
		"currency_name": "iceland krona",
		"currency_code": "isk",
		"currency_number": "352"
	},
	"in": {
		"country_name": "india",
		"country_iso3": "ind",
		"country_iso_numeric": "356",
		"currency_name": "indian rupee",
		"currency_code": "inr",
		"currency_number": "356"
	},
	"id": {
		"country_name": "indonesia",
		"country_iso3": "idn",
		"country_iso_numeric": "360",
		"currency_name": "rupiah",
		"currency_code": "idr",
		"currency_number": "360"
	},
	"ir": {
		"country_name": "iran (islamic republic of)",
		"country_iso3": "irn",
		"country_iso_numeric": "364",
		"currency_name": "iranian rial",
		"currency_code": "irr",
		"currency_number": "364"
	},
	"iq": {
		"country_name": "iraq",
		"country_iso3": "irq",
		"country_iso_numeric": "368",
		"currency_name": "iraqi dinar",
		"currency_code": "iqd",
		"currency_number": "368"
	},
	"ie": {
		"country_name": "ireland",
		"country_iso3": "irl",
		"country_iso_numeric": "372",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"im": {
		"country_name": "isle of man",
		"country_iso3": "imn",
		"country_iso_numeric": "833",
		"currency_name": "pound sterling",
		"currency_code": "gbp",
		"currency_number": "826"
	},
	"il": {
		"country_name": "israel",
		"country_iso3": "isr",
		"country_iso_numeric": "376",
		"currency_name": "new israeli sheqel",
		"currency_code": "ils",
		"currency_number": "376"
	},
	"it": {
		"country_name": "italy",
		"country_iso3": "ita",
		"country_iso_numeric": "380",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"jm": {
		"country_name": "jamaica",
		"country_iso3": "jam",
		"country_iso_numeric": "388",
		"currency_name": "jamaican dollar",
		"currency_code": "jmd",
		"currency_number": "388"
	},
	"jp": {
		"country_name": "japan",
		"country_iso3": "jpn",
		"country_iso_numeric": "392",
		"currency_name": "yen",
		"currency_code": "jpy",
		"currency_number": "392"
	},
	"je": {
		"country_name": "jersey",
		"country_iso3": "jey",
		"country_iso_numeric": "832",
		"currency_name": "pound sterling",
		"currency_code": "gbp",
		"currency_number": "826"
	},
	"jo": {
		"country_name": "jordan",
		"country_iso3": "jor",
		"country_iso_numeric": "400",
		"currency_name": "jordanian dinar",
		"currency_code": "jod",
		"currency_number": "400"
	},
	"kz": {
		"country_name": "kazakhstan",
		"country_iso3": "kaz",
		"country_iso_numeric": "398",
		"currency_name": "tenge",
		"currency_code": "kzt",
		"currency_number": "398"
	},
	"ke": {
		"country_name": "kenya",
		"country_iso3": "ken",
		"country_iso_numeric": "404",
		"currency_name": "kenyan shilling",
		"currency_code": "kes",
		"currency_number": "404"
	},
	"ki": {
		"country_name": "kiribati",
		"country_iso3": "kir",
		"country_iso_numeric": "296",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"kr": {
		"country_name": "korea (the republic of)",
		"country_iso3": "kor",
		"country_iso_numeric": "410",
		"currency_name": "won",
		"currency_code": "krw",
		"currency_number": "410"
	},
	"kw": {
		"country_name": "kuwait",
		"country_iso3": "kwt",
		"country_iso_numeric": "414",
		"currency_name": "kuwaiti dinar",
		"currency_code": "kwd",
		"currency_number": "414"
	},
	"kg": {
		"country_name": "kyrgyzstan",
		"country_iso3": "kgz",
		"country_iso_numeric": "417",
		"currency_name": "som",
		"currency_code": "kgs",
		"currency_number": "417"
	},
	"lv": {
		"country_name": "latvia",
		"country_iso3": "lva",
		"country_iso_numeric": "428",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"lb": {
		"country_name": "lebanon",
		"country_iso3": "lbn",
		"country_iso_numeric": "422",
		"currency_name": "lebanese pound",
		"currency_code": "lbp",
		"currency_number": "422"
	},
	"ls": {
		"country_name": "lesotho",
		"country_iso3": "lso",
		"country_iso_numeric": "426",
		"currency_name": "loti",
		"currency_code": "lsl",
		"currency_number": "426"
	},
	"lr": {
		"country_name": "liberia",
		"country_iso3": "lbr",
		"country_iso_numeric": "430",
		"currency_name": "liberian dollar",
		"currency_code": "lrd",
		"currency_number": "430"
	},
	"ly": {
		"country_name": "libya",
		"country_iso3": "lby",
		"country_iso_numeric": "434",
		"currency_name": "libyan dinar",
		"currency_code": "lyd",
		"currency_number": "434"
	},
	"li": {
		"country_name": "liechtenstein",
		"country_iso3": "lie",
		"country_iso_numeric": "438",
		"currency_name": "swiss franc",
		"currency_code": "chf",
		"currency_number": "756"
	},
	"lt": {
		"country_name": "lithuania",
		"country_iso3": "ltu",
		"country_iso_numeric": "440",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"lu": {
		"country_name": "luxembourg",
		"country_iso3": "lux",
		"country_iso_numeric": "442",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"mo": {
		"country_name": "macao",
		"country_iso3": "mac",
		"country_iso_numeric": "446",
		"currency_name": "pataca",
		"currency_code": "mop",
		"currency_number": "446"
	},
	"mg": {
		"country_name": "madagascar",
		"country_iso3": "mdg",
		"country_iso_numeric": "450",
		"currency_name": "malagasy ariary",
		"currency_code": "mga",
		"currency_number": "969"
	},
	"mw": {
		"country_name": "malawi",
		"country_iso3": "mwi",
		"country_iso_numeric": "454",
		"currency_name": "kwacha",
		"currency_code": "mwk",
		"currency_number": "454"
	},
	"my": {
		"country_name": "malaysia",
		"country_iso3": "mys",
		"country_iso_numeric": "458",
		"currency_name": "malaysian ringgit",
		"currency_code": "myr",
		"currency_number": "458"
	},
	"mv": {
		"country_name": "maldives",
		"country_iso3": "mdv",
		"country_iso_numeric": "462",
		"currency_name": "rufiyaa",
		"currency_code": "mvr",
		"currency_number": "462"
	},
	"ml": {
		"country_name": "mali",
		"country_iso3": "mli",
		"country_iso_numeric": "466",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"mt": {
		"country_name": "malta",
		"country_iso3": "mlt",
		"country_iso_numeric": "470",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"mh": {
		"country_name": "marshall islands (the)",
		"country_iso3": "mhl",
		"country_iso_numeric": "584",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"mq": {
		"country_name": "martinique",
		"country_iso3": "mtq",
		"country_iso_numeric": "474",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"mr": {
		"country_name": "mauritania",
		"country_iso3": "mrt",
		"country_iso_numeric": "478",
		"currency_name": "ouguiya",
		"currency_code": "mru",
		"currency_number": "929"
	},
	"mu": {
		"country_name": "mauritius",
		"country_iso3": "mus",
		"country_iso_numeric": "480",
		"currency_name": "mauritius rupee",
		"currency_code": "mur",
		"currency_number": "480"
	},
	"yt": {
		"country_name": "mayotte",
		"country_iso3": "myt",
		"country_iso_numeric": "175",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"mx": {
		"country_name": "mexico",
		"country_iso3": "mex",
		"country_iso_numeric": "484",
		"currency_name": "mexican peso",
		"currency_code": "mxn",
		"currency_number": "484"
	},
	"fm": {
		"country_name": "micronesia (federated states of)",
		"country_iso3": "fsm",
		"country_iso_numeric": "583",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"md": {
		"country_name": "moldova (the republic of)",
		"country_iso3": "mda",
		"country_iso_numeric": "498",
		"currency_name": "moldovan leu",
		"currency_code": "mdl",
		"currency_number": "498"
	},
	"mc": {
		"country_name": "monaco",
		"country_iso3": "mco",
		"country_iso_numeric": "492",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"mn": {
		"country_name": "mongolia",
		"country_iso3": "mng",
		"country_iso_numeric": "496",
		"currency_name": "tugrik",
		"currency_code": "mnt",
		"currency_number": "496"
	},
	"me": {
		"country_name": "montenegro",
		"country_iso3": "mne",
		"country_iso_numeric": "499",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"ms": {
		"country_name": "montserrat",
		"country_iso3": "msr",
		"country_iso_numeric": "500",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"ma": {
		"country_name": "morocco",
		"country_iso3": "mar",
		"country_iso_numeric": "504",
		"currency_name": "moroccan dirham",
		"currency_code": "mad",
		"currency_number": "504"
	},
	"mz": {
		"country_name": "mozambique",
		"country_iso3": "moz",
		"country_iso_numeric": "508",
		"currency_name": "mozambique metical",
		"currency_code": "mzn",
		"currency_number": "943"
	},
	"mm": {
		"country_name": "myanmar",
		"country_iso3": "mmr",
		"country_iso_numeric": "104",
		"currency_name": "kyat",
		"currency_code": "mmk",
		"currency_number": "104"
	},
	"na": {
		"country_name": "namibia",
		"country_iso3": "nam",
		"country_iso_numeric": "516",
		"currency_name": "namibia dollar",
		"currency_code": "nad",
		"currency_number": "516"
	},
	"nr": {
		"country_name": "nauru",
		"country_iso3": "nru",
		"country_iso_numeric": "520",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"np": {
		"country_name": "nepal",
		"country_iso3": "npl",
		"country_iso_numeric": "524",
		"currency_name": "nepalese rupee",
		"currency_code": "npr",
		"currency_number": "524"
	},
	"nl": {
		"country_name": "netherlands (the)",
		"country_iso3": "nld",
		"country_iso_numeric": "528",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"nc": {
		"country_name": "new caledonia",
		"country_iso3": "ncl",
		"country_iso_numeric": "540",
		"currency_name": "cfp franc",
		"currency_code": "xpf",
		"currency_number": "953"
	},
	"nz": {
		"country_name": "new zealand",
		"country_iso3": "nzl",
		"country_iso_numeric": "554",
		"currency_name": "new zealand dollar",
		"currency_code": "nzd",
		"currency_number": "554"
	},
	"ni": {
		"country_name": "nicaragua",
		"country_iso3": "nic",
		"country_iso_numeric": "558",
		"currency_name": "cordoba oro",
		"currency_code": "nio",
		"currency_number": "558"
	},
	"ne": {
		"country_name": "niger (the)",
		"country_iso3": "ner",
		"country_iso_numeric": "562",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"ng": {
		"country_name": "nigeria",
		"country_iso3": "nga",
		"country_iso_numeric": "566",
		"currency_name": "naira",
		"currency_code": "ngn",
		"currency_number": "566"
	},
	"nu": {
		"country_name": "niue",
		"country_iso3": "niu",
		"country_iso_numeric": "570",
		"currency_name": "new zealand dollar",
		"currency_code": "nzd",
		"currency_number": "554"
	},
	"nf": {
		"country_name": "norfolk island",
		"country_iso3": "nfk",
		"country_iso_numeric": "574",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"mp": {
		"country_name": "northern mariana islands (the)",
		"country_iso3": "mnp",
		"country_iso_numeric": "580",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"no": {
		"country_name": "norway",
		"country_iso3": "nor",
		"country_iso_numeric": "578",
		"currency_name": "norwegian krone",
		"currency_code": "nok",
		"currency_number": "578"
	},
	"om": {
		"country_name": "oman",
		"country_iso3": "omn",
		"country_iso_numeric": "512",
		"currency_name": "rial omani",
		"currency_code": "omr",
		"currency_number": "512"
	},
	"pk": {
		"country_name": "pakistan",
		"country_iso3": "pak",
		"country_iso_numeric": "586",
		"currency_name": "pakistan rupee",
		"currency_code": "pkr",
		"currency_number": "586"
	},
	"pw": {
		"country_name": "palau",
		"country_iso3": "plw",
		"country_iso_numeric": "585",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	" state of": {
		"country_name": "palestine",
		"country_iso3": "ps",
		"country_iso_numeric": "pse",
		"currency_name": " state of",
		"currency_code": "no universal currency",
		"currency_number": ""
	},
	"pa": {
		"country_name": "panama",
		"country_iso3": "pan",
		"country_iso_numeric": "591",
		"currency_name": "balboa",
		"currency_code": "pab",
		"currency_number": "590"
	},
	"pg": {
		"country_name": "papua new guinea",
		"country_iso3": "png",
		"country_iso_numeric": "598",
		"currency_name": "kina",
		"currency_code": "pgk",
		"currency_number": "598"
	},
	"py": {
		"country_name": "paraguay",
		"country_iso3": "pry",
		"country_iso_numeric": "600",
		"currency_name": "guarani",
		"currency_code": "pyg",
		"currency_number": "600"
	},
	"pe": {
		"country_name": "peru",
		"country_iso3": "per",
		"country_iso_numeric": "604",
		"currency_name": "nuevo sol",
		"currency_code": "pen",
		"currency_number": "604"
	},
	"ph": {
		"country_name": "philippines (the)",
		"country_iso3": "phl",
		"country_iso_numeric": "608",
		"currency_name": "philippine peso",
		"currency_code": "php",
		"currency_number": "608"
	},
	"pn": {
		"country_name": "pitcairn",
		"country_iso3": "pcn",
		"country_iso_numeric": "612",
		"currency_name": "new zealand dollar",
		"currency_code": "nzd",
		"currency_number": "554"
	},
	"pl": {
		"country_name": "poland",
		"country_iso3": "pol",
		"country_iso_numeric": "616",
		"currency_name": "zloty",
		"currency_code": "pln",
		"currency_number": "985"
	},
	"pt": {
		"country_name": "portugal",
		"country_iso3": "prt",
		"country_iso_numeric": "620",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"pr": {
		"country_name": "puerto rico",
		"country_iso3": "pri",
		"country_iso_numeric": "630",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"qa": {
		"country_name": "qatar",
		"country_iso3": "qat",
		"country_iso_numeric": "634",
		"currency_name": "qatari rial",
		"currency_code": "qar",
		"currency_number": "634"
	},
	"mk": {
		"country_name": "republic of north macedonia",
		"country_iso3": "mkd",
		"country_iso_numeric": "807",
		"currency_name": "denar",
		"currency_code": "mkd",
		"currency_number": "807"
	},
	"ro": {
		"country_name": "romania",
		"country_iso3": "rou",
		"country_iso_numeric": "642",
		"currency_name": "romanian leu",
		"currency_code": "ron",
		"currency_number": "946"
	},
	"ru": {
		"country_name": "russian federation (the)",
		"country_iso3": "rus",
		"country_iso_numeric": "643",
		"currency_name": "russian ruble",
		"currency_code": "rub",
		"currency_number": "643"
	},
	"rw": {
		"country_name": "rwanda",
		"country_iso3": "rwa",
		"country_iso_numeric": "646",
		"currency_name": "rwanda franc",
		"currency_code": "rwf",
		"currency_number": "646"
	},
	"re": {
		"country_name": "r�union",
		"country_iso3": "reu",
		"country_iso_numeric": "638",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"bl": {
		"country_name": "saint barth�lemy",
		"country_iso3": "blm",
		"country_iso_numeric": "652",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	" ascension and tristan da cunha": {
		"country_name": "saint helena",
		"country_iso3": "sh",
		"country_iso_numeric": "shn",
		"currency_name": " ascension and tristan da cunha",
		"currency_code": "saint helena pound",
		"currency_number": "shp"
	},
	"kn": {
		"country_name": "saint kitts and nevis",
		"country_iso3": "kna",
		"country_iso_numeric": "659",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"lc": {
		"country_name": "saint lucia",
		"country_iso3": "lca",
		"country_iso_numeric": "662",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"mf": {
		"country_name": "saint martin (french part)",
		"country_iso3": "maf",
		"country_iso_numeric": "663",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"pm": {
		"country_name": "saint pierre and miquelon",
		"country_iso3": "spm",
		"country_iso_numeric": "666",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"vc": {
		"country_name": "saint vincent and the grenadines",
		"country_iso3": "vct",
		"country_iso_numeric": "670",
		"currency_name": "east caribbean dollar",
		"currency_code": "xcd",
		"currency_number": "951"
	},
	"ws": {
		"country_name": "samoa",
		"country_iso3": "wsm",
		"country_iso_numeric": "882",
		"currency_name": "tala",
		"currency_code": "wst",
		"currency_number": "882"
	},
	"sm": {
		"country_name": "san marino",
		"country_iso3": "smr",
		"country_iso_numeric": "674",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"st": {
		"country_name": "sao tome and principe",
		"country_iso3": "stp",
		"country_iso_numeric": "678",
		"currency_name": "dobra",
		"currency_code": "stn",
		"currency_number": "930"
	},
	"sa": {
		"country_name": "saudi arabia",
		"country_iso3": "sau",
		"country_iso_numeric": "682",
		"currency_name": "saudi riyal",
		"currency_code": "sar",
		"currency_number": "682"
	},
	"sn": {
		"country_name": "senegal",
		"country_iso3": "sen",
		"country_iso_numeric": "686",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"rs": {
		"country_name": "serbia",
		"country_iso3": "srb",
		"country_iso_numeric": "688",
		"currency_name": "serbian dinar",
		"currency_code": "rsd",
		"currency_number": "941"
	},
	"sc": {
		"country_name": "seychelles",
		"country_iso3": "syc",
		"country_iso_numeric": "690",
		"currency_name": "seychelles rupee",
		"currency_code": "scr",
		"currency_number": "690"
	},
	"sl": {
		"country_name": "sierra leone",
		"country_iso3": "sle",
		"country_iso_numeric": "694",
		"currency_name": "leone",
		"currency_code": "sll",
		"currency_number": "694"
	},
	"sg": {
		"country_name": "singapore",
		"country_iso3": "sgp",
		"country_iso_numeric": "702",
		"currency_name": "singapore dollar",
		"currency_code": "sgd",
		"currency_number": "702"
	},
	"sx": {
		"country_name": "sint maarten (dutch part)",
		"country_iso3": "sxm",
		"country_iso_numeric": "534",
		"currency_name": "netherlands antillean guilder",
		"currency_code": "ang",
		"currency_number": "532"
	},
	"sk": {
		"country_name": "slovakia",
		"country_iso3": "svk",
		"country_iso_numeric": "703",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"si": {
		"country_name": "slovenia",
		"country_iso3": "svn",
		"country_iso_numeric": "705",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"sb": {
		"country_name": "solomon islands",
		"country_iso3": "slb",
		"country_iso_numeric": "90",
		"currency_name": "solomon islands dollar",
		"currency_code": "sbd",
		"currency_number": "90"
	},
	"so": {
		"country_name": "somalia",
		"country_iso3": "som",
		"country_iso_numeric": "706",
		"currency_name": "somali shilling",
		"currency_code": "sos",
		"currency_number": "706"
	},
	"za": {
		"country_name": "south africa",
		"country_iso3": "zaf",
		"country_iso_numeric": "710",
		"currency_name": "rand",
		"currency_code": "zar",
		"currency_number": "710"
	},
	"gs": {
		"country_name": "south georgia and the south sandwich islands",
		"country_iso3": "sgs",
		"country_iso_numeric": "239",
		"currency_name": "no universal currency",
		"currency_code": "",
		"currency_number": ""
	},
	"ss": {
		"country_name": "south sudan",
		"country_iso3": "ssd",
		"country_iso_numeric": "728",
		"currency_name": "south sudanese pound",
		"currency_code": "ssp",
		"currency_number": "728"
	},
	"es": {
		"country_name": "spain",
		"country_iso3": "esp",
		"country_iso_numeric": "724",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	},
	"lk": {
		"country_name": "sri lanka",
		"country_iso3": "lka",
		"country_iso_numeric": "144",
		"currency_name": "sri lanka rupee",
		"currency_code": "lkr",
		"currency_number": "144"
	},
	"sd": {
		"country_name": "sudan (the)",
		"country_iso3": "sdn",
		"country_iso_numeric": "729",
		"currency_name": "sudanese pound",
		"currency_code": "sdg",
		"currency_number": "938"
	},
	"sr": {
		"country_name": "suriname",
		"country_iso3": "sur",
		"country_iso_numeric": "740",
		"currency_name": "surinam dollar",
		"currency_code": "srd",
		"currency_number": "968"
	},
	"sj": {
		"country_name": "svalbard and jan mayen",
		"country_iso3": "sjm",
		"country_iso_numeric": "744",
		"currency_name": "norwegian krone",
		"currency_code": "nok",
		"currency_number": "578"
	},
	"se": {
		"country_name": "sweden",
		"country_iso3": "swe",
		"country_iso_numeric": "752",
		"currency_name": "swedish krona",
		"currency_code": "sek",
		"currency_number": "752"
	},
	"ch": {
		"country_name": "switzerland",
		"country_iso3": "che",
		"country_iso_numeric": "756",
		"currency_name": "swiss franc",
		"currency_code": "chf",
		"currency_number": "756"
	},
	"sy": {
		"country_name": "syrian arab republic",
		"country_iso3": "syr",
		"country_iso_numeric": "760",
		"currency_name": "syrian pound",
		"currency_code": "syp",
		"currency_number": "760"
	},
	"tw": {
		"country_name": "taiwan (province of china)",
		"country_iso3": "twn",
		"country_iso_numeric": "158",
		"currency_name": "new taiwan dollar",
		"currency_code": "twd",
		"currency_number": "901"
	},
	"tj": {
		"country_name": "tajikistan",
		"country_iso3": "tjk",
		"country_iso_numeric": "762",
		"currency_name": "somoni",
		"currency_code": "tjs",
		"currency_number": "972"
	},
	" united republic of": {
		"country_name": "tanzania",
		"country_iso3": "tz",
		"country_iso_numeric": "tza",
		"currency_name": " united republic of",
		"currency_code": "tanzanian shilling",
		"currency_number": "tzs"
	},
	"th": {
		"country_name": "thailand",
		"country_iso3": "tha",
		"country_iso_numeric": "764",
		"currency_name": "baht",
		"currency_code": "thb",
		"currency_number": "764"
	},
	"tl": {
		"country_name": "timor-leste",
		"country_iso3": "tls",
		"country_iso_numeric": "626",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"tg": {
		"country_name": "togo",
		"country_iso3": "tgo",
		"country_iso_numeric": "768",
		"currency_name": "cfa franc bceao",
		"currency_code": "xof",
		"currency_number": "952"
	},
	"tk": {
		"country_name": "tokelau",
		"country_iso3": "tkl",
		"country_iso_numeric": "772",
		"currency_name": "new zealand dollar",
		"currency_code": "nzd",
		"currency_number": "554"
	},
	"to": {
		"country_name": "tonga",
		"country_iso3": "ton",
		"country_iso_numeric": "776",
		"currency_name": "pa�anga",
		"currency_code": "top",
		"currency_number": "776"
	},
	"tt": {
		"country_name": "trinidad and tobago",
		"country_iso3": "tto",
		"country_iso_numeric": "780",
		"currency_name": "trinidad and tobago dollar",
		"currency_code": "ttd",
		"currency_number": "780"
	},
	"tn": {
		"country_name": "tunisia",
		"country_iso3": "tun",
		"country_iso_numeric": "788",
		"currency_name": "tunisian dinar",
		"currency_code": "tnd",
		"currency_number": "788"
	},
	"tr": {
		"country_name": "turkey",
		"country_iso3": "tur",
		"country_iso_numeric": "792",
		"currency_name": "turkish lira",
		"currency_code": "try",
		"currency_number": "949"
	},
	"tm": {
		"country_name": "turkmenistan",
		"country_iso3": "tkm",
		"country_iso_numeric": "795",
		"currency_name": "turkmenistan new manat",
		"currency_code": "tmt",
		"currency_number": "934"
	},
	"tc": {
		"country_name": "turks and caicos islands (the)",
		"country_iso3": "tca",
		"country_iso_numeric": "796",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"tv": {
		"country_name": "tuvalu",
		"country_iso3": "tuv",
		"country_iso_numeric": "798",
		"currency_name": "australian dollar",
		"currency_code": "aud",
		"currency_number": "36"
	},
	"ug": {
		"country_name": "uganda",
		"country_iso3": "uga",
		"country_iso_numeric": "800",
		"currency_name": "uganda shilling",
		"currency_code": "ugx",
		"currency_number": "800"
	},
	"ua": {
		"country_name": "ukraine",
		"country_iso3": "ukr",
		"country_iso_numeric": "804",
		"currency_name": "hryvnia",
		"currency_code": "uah",
		"currency_number": "980"
	},
	"ae": {
		"country_name": "united arab emirates (the)",
		"country_iso3": "are",
		"country_iso_numeric": "784",
		"currency_name": "uae dirham",
		"currency_code": "aed",
		"currency_number": "784"
	},
	"gb": {
		"country_name": "united kingdom of great britain and northern ireland (the)",
		"country_iso3": "gbr",
		"country_iso_numeric": "826",
		"currency_name": "pound sterling",
		"currency_code": "gbp",
		"currency_number": "826"
	},
	"um": {
		"country_name": "united states minor outlying islands (the)",
		"country_iso3": "umi",
		"country_iso_numeric": "581",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"us": {
		"country_name": "united states of america (the)",
		"country_iso3": "usa",
		"country_iso_numeric": "840",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"uy": {
		"country_name": "uruguay",
		"country_iso3": "ury",
		"country_iso_numeric": "858",
		"currency_name": "peso uruguayo",
		"currency_code": "uyu",
		"currency_number": "858"
	},
	"uz": {
		"country_name": "uzbekistan",
		"country_iso3": "uzb",
		"country_iso_numeric": "860",
		"currency_name": "uzbekistan sum",
		"currency_code": "uzs",
		"currency_number": "860"
	},
	"vu": {
		"country_name": "vanuatu",
		"country_iso3": "vut",
		"country_iso_numeric": "548",
		"currency_name": "vatu",
		"currency_code": "vuv",
		"currency_number": "548"
	},
	"ve": {
		"country_name": "venezuela (bolivarian republic of)",
		"country_iso3": "ven",
		"country_iso_numeric": "862",
		"currency_name": "bolivar",
		"currency_code": "vef",
		"currency_number": "937"
	},
	"vn": {
		"country_name": "viet nam",
		"country_iso3": "vnm",
		"country_iso_numeric": "704",
		"currency_name": "dong",
		"currency_code": "vnd",
		"currency_number": "704"
	},
	"vg": {
		"country_name": "virgin islands (british)",
		"country_iso3": "vgb",
		"country_iso_numeric": "92",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"vi": {
		"country_name": "virgin islands (u.s.)",
		"country_iso3": "vir",
		"country_iso_numeric": "850",
		"currency_name": "us dollar",
		"currency_code": "usd",
		"currency_number": "840"
	},
	"wf": {
		"country_name": "wallis and futuna",
		"country_iso3": "wlf",
		"country_iso_numeric": "876",
		"currency_name": "cfp franc",
		"currency_code": "xpf",
		"currency_number": "953"
	},
	"eh": {
		"country_name": "western sahara",
		"country_iso3": "esh",
		"country_iso_numeric": "732",
		"currency_name": "moroccan dirham",
		"currency_code": "mad",
		"currency_number": "504"
	},
	"ye": {
		"country_name": "yemen",
		"country_iso3": "yem",
		"country_iso_numeric": "887",
		"currency_name": "yemeni rial",
		"currency_code": "yer",
		"currency_number": "886"
	},
	"zm": {
		"country_name": "zambia",
		"country_iso3": "zmb",
		"country_iso_numeric": "894",
		"currency_name": "zambian kwacha",
		"currency_code": "zmw",
		"currency_number": "967"
	},
	"zw": {
		"country_name": "zimbabwe",
		"country_iso3": "zwe",
		"country_iso_numeric": "716",
		"currency_name": "zimbabwe dollar",
		"currency_code": "zwl",
		"currency_number": "932"
	},
	"ax": {
		"country_name": "Åland islands",
		"country_iso3": "ala",
		"country_iso_numeric": "248",
		"currency_name": "euro",
		"currency_code": "eur",
		"currency_number": "978"
	}
}
var countryMatrixArrayObj = Object.entries(countryMatrixObject);

ipAccess.text("Get my country");

var requestIP = function () {
  var ipApiKey = "efeded716793ece82a2e910e26d0d738"
  var ipUrl = "http://api.ipapi.com/api/check?access_key=" + ipApiKey + "&output=json";

  fetch(ipUrl)
    .then(function (response) {
      if (response.ok) {
        response.json()
          .then(function (data) {
            displayIP(data);
            storeIP(data);
          });
      };
    });
  hideModal();
}

var storeIP = function (ip) {
  var storeCountryCode = ip.country_code;
  localStorage.setItem("Home Country", storeCountryCode.toLowerCase());
  indexHomeCountry();
}

var displayIP = function (ip) {
  var countryCode = $("h2");
  countryCode.text(ip.city + ", " + ip.region_name + ", " + ip.country_name);
}

function hideModal(event) {
  modal.css("display", "none");
  indexHomeCountry();
}

function showModal() {
  modal.css("display", "block");
}

ipAccess.click(showModal);

modalYes.click(requestIP);
modalNo.click(hideModal);

span.click(hideModal);

function indexHomeCountry() {
        countryMatrixArrayObj.findIndex(element => {
      if (element[0] === localStorage.getItem("Home Country")) {
        var currentCurrencyCode = element[1].currency_code
        localStorage.setItem("Home Country Currency", currentCurrencyCode) 
      }
    });
}

function indexDestinationCountry() {
  countryMatrixArrayObj.findIndex(element => {
  if (element[0] === countryOption.value) {
    var currentCurrencyCode = element[1].currency_code
    localStorage.setItem("Home Country Currency", currentCurrencyCode) 
  }
});
}

var requestCurrency = function () {
  if (countryOrigin === undefined) {
    var countryOrigin = localStorage.getItem("Home Country Currency");
  }
  if (countryDestination === undefined) {
    var countryDestination = localStorage.getItem("Visiting Country Currency");
  }

  var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
  // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
  // https://github.com/fawazahmed0/currency-api

  fetch(currencyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCalculated(data);
    })
}

function displayCalculated(rate) {
  calculated.text((rate.countryDestination * currencyInput.val()).toFixed(2));
  currencyInput.val("");
}

function submitCurrency() {
  requestCurrency();
}

currencyAmt.click(function (event) {
  event.preventDefault();
  submitCurrency();
})

function countriesVisitingDropDown() {
  countriesVisitingList.addClass("overflow");

  for (var i = 0; i < countryMatrixArrayObj.length; i++) {
    var countryOption = $("<option>");
    countryOption.text(countryMatrixArrayObj[i][1].country_name + " (" + countryMatrixArrayObj[i][1].country_iso3.toUpperCase() + ")");
    countryOption.val(countryMatrixArrayObj[i][1].currency_code)
    countryOption.appendTo(countriesVisitingList);

  }
  countryMatrixArrayObj.findIndex(element => {
    if (element[1].currency_code === countryOption.val()) {
      var visitingCurrencyCode = element[1].currency_code
      localStorage.setItem("Visiting Country Currency", visitingCurrencyCode) 
    }
  });
}

function countriesVisitingSelect() {
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).find('option:selected')[i];
    // use switch or if/else etc.
    if (opt) {
      var opt = $(this).find('option:selected')[i];

    }
};

countriesVisitingDropDown();