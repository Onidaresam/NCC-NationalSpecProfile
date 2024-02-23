const BandsData = [
    {
      id: 1,
      location: "Lagos",
      region: [
        {
          region:"VI",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.32",
            frequencies: {
              utilized: ["100KHZ-13.14MHZ(99.98%)"],
              notutilized: ["13.14MHZ-26.19MHZ(0%)","26.19MHZ-30.00MHZ(0%)"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "97.60",
                "frequencies": {
                  "utilized": ["30.23MHZ-52.27MHZ(97.45%)","52.27MHZ-60.00MHZ(97.75%)"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "98.13",
                "frequencies": {
                  "utilized": ["60.00MHZ-78.36MHZ(98%)","78.36MHZ-90.00MHZ(98.23%)"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.04",
                "frequencies": {
                  "utilized": ["90.00MHZ-104.45MHZ(99.49%)","104.45MHZ-117.49MHZ(98.63%)"],
                  "notutilized": ["117.49MHZ-120.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["120.00MHZ - 150.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["150.00MHZ - 180.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["180.00MHZ - 210.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["210.00MHZ - 240.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["240.00MHZ - 270.00MHZ(0%)"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["270.00MHz - 300.00MHz(0%)"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
          range: "300MHZ-3GHZ",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00-480.00MHz(0%"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["480.00-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["750.00-780.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: ["783.00MHz- 796.00MHz(0.05%)"],
                  notutilized: ["780MHz- 783MHz(0%)", "796MHz- 810MHz(0%)"]
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["810.00-840.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840.00-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "24.58",
                frequencies: {
                  utilized: ["874MHz- 887MHz(73.72%)", "887MHz- 900MHz(99.98%)"],
                  notutilized: ["870MHz- 874MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["900MHz- 930MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["930MHz- 950MHz(100%)", "950MHz- 960MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["960MHz- 965MHz(99.92%)", "965MHz- 990MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: ["990MHz- 1004MHz(99.86%)", "1004MHz- 1017MHz(99.84%)", "1017MHz- 1020MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(99.87%)", "1030MHz- 1043MHz(99.89%)", "1043MHz- 1050MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1050.00-1080.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1050MHz- 1056MHz(99.91%)", "1056MHz- 1070MHz(99.92%)", "1070MHz- 1080MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1080MHz-1083MHz(99.94%)", "1083MHz-1096MHz(99.95%)", "1095MHz-1110MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["1110MHz-1122MHz(99.97%)", "1122MHz-1135MHz(99.97%)", "1135MHz-1140MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1140MHz-1148MHz(99.97%)", "1148MHz-1161MHz(99.98%)", "1161MHz-1170MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1170MHz-1174MHz(99.98%)", "1174MHz-1187MHz(99.97%)", "1187MHz-1200MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.98%)", "1213MHz-1226MHz(99.98%)", "1226MHz-1230MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["230MHz-1239MHz(99.97%)", "1239MHz-1252MHz(99.97%)", "1252MHz-1260MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.96%), 1265MHz-1278MHz(99.97%), 1278MHz-1290MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1290MHz-1304MHz(99.95%)", "1304MHz-1317MHz(99.96%)", "1317MHz-1320MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1320MHz-1331MHz(99.94%)", "1331MHz-1344MHz(99.95%)", "1344MHz-1350MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1350MHz-1357MHz(99.96%)", "1357MHz-1370MHz(99.95%)", "1370MHz-1380MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1380MHz-1383MHz(99.97%)"," 1383MHz-1396MHz(99.98%)", "1396MHz-1408MHz(99.98%)", "1408MHz-1410MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1410MHz-1422MHz(99.98%)", "1422MHz-1435MHz(99.99%)", "1435MHz-1440MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.99%",
                frequencies: {
                  utilized: ["1440MHz-1448MHz(99.99%)", "1448MHz-1461MHz(99.99%)", "1461MHz-1470MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.99%",
                frequencies: {
                  utilized: ["1470MHz-1474MHz(99.99%)",
                  "1474MHz-1487MHz(99.99%)", 
                  "1487MHz-1500MHz(99.99%)"]
                  ,
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.99%)"," 1513MHz-1526MHz(99.99%)", "1526MHz-1530MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.99%)", "1539MHz-1552MHz(99.99%)", "1552MHz-1560MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.99%)", "1565MHz-1578MHz(99.99%)", "1578MHz-1590MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1590MHz-1604MHz(99.97%)", "1604MHz-1617MHz(99.98%)", "1617MHz-1620MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1620MHz-1631MHz(99.97%)", "1631MHz-1644MHz(99.97%)", "1644MHz-1650MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1650MHz-1657MHz(99.98%)", "1657MHz-1669MHz(99.97%)", "1669MHz-1680MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1680MHz-1683MHz(99.99%)", "1683MHz-1696MHz(99.98%)", "1696MHz-1708MHz(99.98%)", "1708MHz-1710MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1710MHz-1722MHz(99.99%)", "1722MHz-1735MHz(99.99%)", "1735MHz-1740MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1740MHz-1748MHz(99.99%)", "1748MHz-1761MHz(99.99%)", "1761MHz-1770MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1770MHz-1774MHz(99.99%)", "1774MHz-1787MHz(100%)", "1787MHz-1800MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(100%)", "1813MHz-1826MHz(100%)", "1826MHz-1830MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(100%)", "1839MHz-1852MHz(100%)", "1852MHz-1860MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(100%)", "1865MHz-1878MHz(100%)", "1878MHz-1890MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1890MHz-1904MHz(99.99%)", "1904MHz-1917MHz(99.99%)", "1917MHz-1920MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1920MHz-1931MHz(99.98%)", "1931MHz-1944MHz(100%)", "1944MHz-1950MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1950MHz-1957MHz(100%)", "1957MHz-1970MHz(100%)", "1970MHz-1980MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1980MHz-1996MHz(100%)", "1996MHz-2009MHz(100%)", "2009MHz-2010MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "95.62",
                frequencies: {
                  utilized: ["2010MHz-2022MHz(100%)", "2022MHz-2035MHz(100%)", "2035MHz-2040MHz(86.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "87.20",
                frequencies: {
                  utilized: ["2040MHz-2048MHz(86.87%)", "2048MHz-2061MHz(86.65%)", "2061MHz-2070MHz(88.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "88.52",
                frequencies: {
                  utilized: ["2070MHz- 2074MHz(88.10%)", "2074MHz- 2087MHz(88.30%)", "2087MHz- 2100MHz(89.16%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "96.56",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(89.68%)", "2113MHz- 2126MHz(100%)", "2126MHz-2130MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(100%)", "2139MHz-2152MHz(100%)", "2152MHz-2160MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "94.60",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(100%)", "2165MHz-2178MHz(91.77%)", "2178MHz- 2190MHz(92.02%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "76.74",
                frequencies: {
                  utilized: ["2190MHz-2204MHz(91.97%)", "2204MHz-2217MHz(69.81%)", "2217MHz-2220MHz(68.44%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "66.78",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(68.44%)", "2230MHz-2244MHz(68.33%)", "2244MHz-2250MHz(66.56%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "66.35",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(66.56%)", "2256MHz-2270MHz(67.12%)", "2270MHz-2280MHz(65.36%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "82.15",
                frequencies: {
                  utilized: ["2280MHz-2295MHz(65.67%)", "2295MHz-2308MHz(87.44%)", "2290MHz-2310MHz(93.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "93.77",
                frequencies: {
                  utilized: ["2310MHz-2322MHz(93.34%)", "2322MHz-2335MHz(93.05%)", "2335MHz-2340MHz(94.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "93.87",
                frequencies: {
                  utilized: ["2340MHz-2360MHz(93.95%)", "2360MHz-2370MHz(91.75%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "82.75",
                frequencies: {
                  utilized: ["2370MHz-2387MHz(91.75%)", "2387MHz-2400MHz(73.75%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "81.48",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(81.41%)", "2413MHz-2426MHz(83.52%)", "2426MHz- 2430MHz(79.49%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "81.59",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(79.49%)", "2439MHz- 2452MHz(80.13%)", "2452MHz- 2460MHz(85.13%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "83.51",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(85.13%)", "2465MHz- 2478MHz(86.29%)", "2478MHz- 2490MHz(79.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "76.11",
                frequencies: {
                  utilized: ["2490MHz- 2450MHz(77.15%)", "2450MHz- 2517MHz(78.18%)", "2517MHz- 2520MHz(78.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "79.77",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(78.98%)", "2530MHz- 2453MHz(79.77%)", "2453MHz- 2550MHz(80.53%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "81.18",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(80.53%)", "2556MHz- 2569MHz(80.63%)", "2569MHz- 2580MHz(82.37%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "89.63",
                frequencies: {
                  utilized: ["2580MHz- 2583MHz(82.37%)", "2583MHz- 2596MHz(93.27%)", "2596MHz- 2610MHz(93.25%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "97.41",
                frequencies: {
                  utilized: ["2610MHz- 2622MHz(92.22%)", "2622MHz- 2634Hz(100%)", "2634Hz- 2640MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2640Hz- 2660MHz(100%)", "2660Hz- 2670MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "92.44",
                frequencies: {
                  utilized: ["2670MHz- 2674MHz(100%)", "2674MHz- 2687MHz(99.97%)", "2687MHz - 2700MHz(77.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "67.05",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(66.84%)", "2713MHz- 2726MHz(66.56%)", "2726MHz 2730MHz(67.73%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "68.82",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(67.73%)", "2739MHz- 2752MHz(68.76%)", "2752MHz- 2760MHz(69.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "71.05",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(69.96%)", "2765MHz- 2778MHz(70.89%)", "2778MHz- 2790MHz(%),(72.29%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "74.32",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(72.29%)", "2791MHz- 2804MHz(73..30%)", "2804MHz- 2817MHz(75.83%)", "2817MHz- 2820MHz(75.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "77.18",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(75.87%)", "2830MHz- 2844MHz(77.52%)", "2844MHz- 2850MHz(78.14%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "78.74",
                frequencies: {
                  utilized: ["2850MHz- 2857MHz(78.14%)", "2857MHz- 2870MHz(78.97%)", "2870MHz- 2880MHz(79.12%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "78.80",
                frequencies: {
                  utilized: ["2880MHz- 2883MHz(79.12%)", "2883MHz- 2896MHz(78.61%)", "2896MHz- 2909MHz(78.46%)", "2909MHz- 2910MHz(78.00%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "77.66",
                frequencies: {
                  utilized: ["2910MHz- 2922MHz(78.00%)",  "2922MHz- 2935MHz(77.74%)", "2935MHz- 2940MHz(77.24%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "76.90",
                frequencies: {
                  utilized: ["2940MHz- 2948MHz(77.24%)", "2948MHz- 2961MHz(76.84%)", "2961MHz- 2970MHz(76.62%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "76.80",
                frequencies: {
                  utilized: ["2970MHz- 2974MHz(76.62%)", "2974MHz- 2987MHz(77.83%)", "2987MHz- 3000MHz(75.93%)"],
                  notutilized: []
                }
              }
            }
          ]
        },

        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Airport",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "96.71",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "97.40",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.29",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O.046",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Alausa",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz

        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "97.37",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "97.97",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.15",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O.0021",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0.0005",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
      ],

    },
    {
      id: 2,
      location: "University of Ilorin",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "42.38",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
    {
      id: 3,
      location: "Asadam",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "31.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "94.82",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "95.54",
                "frequencies": {
                  "utilized": ["65.31MHHZ","78.35MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "64.05",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ", "195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHZ", "234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ","300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
    {
      id: 4,
      location: "Ibadan",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ", "26.19MHZ"]
            }
          }
        },
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "96.44",
                "frequencies": {
                  "utilized": ["39.23MHZ", "52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "97.13",
                "frequencies": {
                  "utilized": ["65.31MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "65.12",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.48MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ", "169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.70MHZ","195.74MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ","300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
    },
    {
      id: 5,
      location: "Lokoja Kogi",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "0.16",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["39.23MHZ","53.27MHZ", ]
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "0.40",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["65.32MHZ","78.36MHZ"]
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "0.51",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["91.40MHZ","104.45MHZ","117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.87MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ", "300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
  ];
export default BandsData