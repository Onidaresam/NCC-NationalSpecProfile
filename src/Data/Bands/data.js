const BandsData = [
    {
      id: 1,
      location: "Lagos",
      region: [
        {
          region:"VI",
          bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.32",
            frequencies: {
              utilized: ["100KHZ-13.14MHz(99.98%)"],
              notutilized: ["13.14MHz-26.19MHz(0%)","26.19MHz-30.00MHz(0%)"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "97.60",
                "frequencies": {
                  "utilized": ["30.23MHz-52.27MHz(97.45%)","52.27MHz-60.00MHz(97.75%)"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "98.13",
                "frequencies": {
                  "utilized": ["60.00MHz-78.36MHz(98%)","78.36MHz-90.00MHz(98.23%)"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "66.04",
                "frequencies": {
                  "utilized": ["90.00MHz-104.45MHz(99.49%)","104.45MHz-117.49MHz(98.63%)"],
                  "notutilized": ["117.49MHz-120.00MHz(0%)"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "O",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["120.00MHz - 150.00MHz(0%)"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["150.00MHz - 180.00MHz(0%)"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["180.00MHz - 210.00MHz(0%)"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["210.00MHz - 240.00MHz(0%)"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["240.00MHz - 270.00MHz(0%)"]
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
        //300MHz to 3Ghz
        {
          range: "300MHz-3GHZ",
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
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "42.20", frequencies: { utilized: ["3000MHz-3013MHz(48.64%)", "3013MHz-3026MHz(46.64%)", "3026MHz- 3030MHz(49.60%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "52.34", frequencies: { utilized: ["3030MHz-3039MHz(49.60%),  3039MHz-3052MHz(51.99%), 3052MHz-3060MHz(55.44%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "55.37", frequencies: { utilized: ["3060MHz-3065MHz(55.44%)", "3065MHz-3078MHz(54.26%)", "3078MHz-3090MHz(56.42%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "60.21", frequencies: { utilized: ["3090MHz-3104MHz(57.76%)", "3104MHz-3117MHz(61.44%)", "3117MHz-3120MHz(61.44%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "63.32", frequencies: { utilized: ["3120MHz-3130MHz(61.44%)", "3130MHz-3143MHz(63.41%)", "3143MHz-3150MHz(65.12%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "66.61", frequencies: { utilized: ["3150MHz-3156MHz(65.12%)", "3156MHz-3169MHz(67.20%)",  "3169MHz-3180MHz(67.51%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "67.22", frequencies: { utilized: ["3180MHz-3182MHz(67.51%)", "3182MHz-3195MHz(66.54%)",  "3195MHz-3210MHz(67.61%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "67.85", frequencies: { utilized: ["3210MHz-3221MHz(67.45%)", "3221MHz-3234MHz(68.13%)",  "3224MHz-3240MHz(67.98%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "68.05", frequencies: { utilized: ["3240MHz-3247MHz(67.98%)", "3247MHz-3260MHz(68.47%)",  "3260MHz-3270MHz(67.71%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "67.88", frequencies: { utilized: ["3270MHz- 3273MHz(67.71%)", "3273MHz-3287MHz(68.44%)", "3287MHz-3300MHz(67.50%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "67.46", frequencies: { utilized: ["300MHz-3313MHz(68.16%)", "3313MHz-3326MHz(66.75%)",  "3326MHz-3330MHz(67.46%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "67.67", frequencies: { utilized: ["3330MHz-3339MHz(67.46%)", "3339MHz-3352MHz(67.16%)", "3352MHz-3360MHz(68.39%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "68.13", frequencies: { utilized: ["3360MHz-3365MHz(68.39%)", "3365MHz-3378MHz(68.17%)",  "3378MHz-3390MHz(67.83%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "69.47", frequencies: { utilized: ["3390MHz-3391MHz(67.83%)", "3391MHz-3404MHz(67.96%)", "3404MHz-3420MHz(62.61%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "70.02", frequencies: { utilized: ["3420MHz-3430MHz(70.53%)",  "3430MHz-3443MHz(69.58%)", "3443MHz-3450MHz(69.96%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "69.57", frequencies: { utilized: ["3450MHz-3456MHz(69.96%)", "3456MHz-3469MHz(69.40%)", "3469MHz-3480MHz(69.34%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "72.42", frequencies: { utilized: ["3480MHz-3482MHz(69.34%)", "3482MHz-3495MHz(67.76%)", "3495MHz - 3508MHz(72.26%)", "3508MHz-3510MHz(80.31%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "80.17", frequencies: { utilized: ["3510MHz-3521MHz(80.31%)",   "3521MHz-3534MHz(79.79%)", "3534MHz-3540MHz(80.41%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "80.44", frequencies: { utilized: ["3540MHz-3547MHz(80.41%)",  "3547MHz-3560MHz(80.80%)", "3560MHz-3570MHz(80.10%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "80.35", frequencies: { utilized: ["3570MHz-3573MHz(80.10%)", "3573MHz-3586MHz(80.69%)", "3586MHz-3600MHz(80.26%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "65.09", frequencies: { utilized: ["3600MHz- 3613MHz(74.08%)", "3613MHz-3626MHz(60.76%)", "3626MHz-3630MHz(60.43%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "58.47", frequencies: { utilized: ["3630MHz-3639MHz(60.43%)", "3639MHz-3652MHz(58.71%)", "3652MHz-3660MHz(56.28%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "54.17", frequencies: { utilized: ["3660MHz-3665MHz(56.28%)", "3665MHz-3678MHz(53.74%)", "3678MHz-3690MHz(52.49%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "51.18", frequencies: { utilized: ["3690MHz-3691MHz(52.49%)", "3691MHz-3704MHz(51.48%)", "3704MHz-3720MHz(51.91%)"], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "51.27", frequencies: { utilized: ["3720MHz-3730MHz(51.91%)", "3730MHz-3743MHz(50.22%)", "3743MHz-3750MHz(52.67%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "52.56", frequencies: { utilized: ["3750MHz-3756MHz(52.67%)",  "3756MHz-3769MHz(52.20%)", "3769MHz-3780MHz(52.82%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "54.79", frequencies: { utilized: [" 3780MHz-3782MHz(52.82%)", "3782MHz-3795MHz(53.51%)", "3795MHz-3808MHz(55.91%)"," 3808MHz-3810MHz(56.93%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "58.32", frequencies: { utilized: ["3810MHz-3821MHz(56.93%)"," 3821MHz-3835MHz(58.54%)"," 3835MHz-3840MHz(59.48%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "60.44", frequencies: { utilized: ["3840MHz-3847MHz(59.48%)"," 3847MHz-3860MHz(60.78%)", "3860MHz-3870MHz(61.07%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "61.46", frequencies: { utilized: ["3870MHz-3873MHz(61.07%)", "3873MHz-3886MHz(62.07%)", "3886MHz-3900MHz(61.25%"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "58.06", frequencies: { utilized: ["3900MHz-3913MHz(60.03%)", "3913MHz-3926MHz(58.14%)", "3926MHz-3930MHz(56.03%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "54.79", frequencies: { utilized: ["3930MHz-3939MHz(56.03%)", "3939MHz-3952MHz(54.51%)", "3952MHz-3960MHz(53.82%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "54.32", frequencies: { utilized: ["960MHz-3965MHz(53.82%)",  "3965MHz-3978MHz(54.07%)", "3978MHz-3990MHz(55.05%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "57.45", frequencies: { utilized: ["3990MHz-3991MHz(55.05%)", "3991MHz-4004MHz(56.69%)", "4004MHz-4017MHz(58.30%)", "4017MHz-4020MHz(59.76%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "61.27", frequencies: { utilized: ["4020MHz- 4030MHz(59.76%)", "4030MHz-4043MHz(60.98%)", "4043MHz-4050MHz(63.08%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "64.76", frequencies: { utilized: ["4050MHz-4056MHz(63.08%)", "4056MHz-4069MHz(64.69%)", "4069MHz-4080MHz(66.54%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "68.34", frequencies: { utilized: ["4080MHz-4082MHz(66.54%)", "4082MHz-4095MHz(68.22%)", "4095MHz-4110MHz(69.38%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "69.99", frequencies: { utilized: ["4110MHz-4121MHz(69.38%)",  "4121MHz-4134MHz(69.98%)", "4134MHz-4140MHz(70.60%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "71.49", frequencies: { utilized: ["4140MHz-4147MHz(70.60%)", "4147MHz-4160MHz(71.02%)", "4160MHz-4170MHz(72.86%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "74.09", frequencies: { utilized: ["4170MHz-4173MHz(72.86%)", "4173MHz-4186MHz(74.42%)", "4186MHz-4200MHz(74.98%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "76.63", frequencies: { utilized: ["4200MHz-4213MHz(76.15%)", "4213MHz-4226MHz(76.41%)", "4226MHz-4230MHz(77.31%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "78.61", frequencies: { utilized: ["4230MHz-4239MHz(77.31%)", "4239MHz-4252MHz(78.60%)", "4252MHz-4260MHz(79.90%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "81.07", frequencies: { utilized: ["4260MHz-4265MHz(79.90%)",  "4265MHz-4278MHz(80.99%)", "4278MHz-4290MHz(82.32%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "83.34", frequencies: { utilized: ["4290MHz-4291MHz(82.32%)",  "4291MHz-4304MHz(83.11%)", "4304MHz-4320MHz(84.54%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "85.67", frequencies: { utilized: ["4320MHz-4330MHz(84.54%)", "4330MHz-4343MHz(85.55%)", "4343MHz-4350MHz(86.92%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "88.27", frequencies: { utilized: ["4350MHz-4356MHz(86.92%)", "4356MHz-4369MHz(88.50%)", "4369MHz-4380MHz(89.39%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "91.08", frequencies: { utilized: ["4380MHz-4382MHz(89.39%)", "4382MHz-4395MHz(90.65%)", "4395MHz-4410MHz(92.66%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "93.939", frequencies: { utilized: ["4410MHz-4421MHz(92.66%)", "4421MHz-4434MHz(93.32%)", "4434MHz-4440MHz(94.20%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "95.76", frequencies: { utilized: ["4440MHz-4447MHz(94.20%)", "4447MHz-4460MHz(94.70%)", "4460MHz-4470MHz(95.37%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "95.74", frequencies: { utilized: ["4470MHz-4473MHz(95.37%)", "4473MHz-4486MHz(95.74%)", "4486MHz-4500MHz(96.10%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "96.49", frequencies: { utilized: ["4500MHz-4513MHz(96.45%)", "4513MHz-4526MHz(96.56%)", "4526MHz-4530MHz(96.46%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "96.36", frequencies: { utilized: ["4530MHz-4539MHz(96.46%)", "4539MHz-4552MHz(96.37%)", "4552MHz-4560MHz(96.26%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "96.13", frequencies: { utilized: ["4560MHz-4565MHz(96.26%)", "4565MHz-4578MHz(96.14%)", "4578MHz-4590MHz(95.98%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "95.65", frequencies: { utilized: ["4590MHz-4591MHz(95.98%)",  "4591MHz-4604MHz(95.87%)", "4604MHz-4620MHz(95.19%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "94.82", frequencies: { utilized: ["4620MHz-4630MHz(95.19%)",  "4630MHz-4643MHz(94.77%)","4643MHz- 4650MHz(94.51%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "94.44", frequencies: { utilized: ["4650MHz- 4656MHz(94.51%)", "4656MHz- 4670MHz(94.35%)", "4670MHz- 4680MHz(94.45%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "94.85", frequencies: { utilized: ["4680MHz- 4682MHz(94.45%)", "4682MHz-4695MHz(94.70%)", "4695MHz- 4708MHz(94.96%)", "4708MHz-4710MHz(95.28%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "95.64", frequencies: { utilized: ["4710MHz- 4721MHz(95.28%)", "4721MHz-4734MHz(95.56%)", "4734MHz-4740MHz(96.08%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "96.67", frequencies: { utilized: ["4740MHz-4747MHz(96.08%)", "4747MHz-4760MHz(96.72%)", "4760MHz-4770MHz(97.21%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "97.60", frequencies: { utilized: ["4770MHz-4773MHz(97.21%)", "4773MHz-4786MHz(97.66%)", "4786MHz-4800MHz(97.94%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "98.19", frequencies: { utilized: ["4800MHz-4813MHz(98.24%)", "4813MHz-4826MHz(98.38%)", "4826MHz-4830MHz(98.39%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "98.47", frequencies: { utilized: ["4830MHz-4839MHz(98.39%)", "4839MHz-4852MHz(98.51%)", "4852MHz-4860MHz(98.59%)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "98.54", frequencies: { utilized: ["4860MHz-4865MHz(98.59%)" ,"4865MHz-4878MHz(98.52%)", "4878MHz-4890MHz(98.52%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "98.54", frequencies: { utilized: ["4890MHz-4891MHz(98.52%)",  "4891MHz-4904MHz(98.54%)", "4904MHz-4920MHz(98.57%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "98.57", frequencies: { utilized: ["4920MHz-4930MHz(98.57%)", "4930MHz-4943MHz(98.51%)", "4943MHz-4950MHz(98.62%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.87", frequencies: { utilized: ["4950MHz-4956MHz(98.62%)",  "4956MHz-4969MHz(98.87%)", "4969MHz-4980MHz(99.11%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "99.29", frequencies: { utilized: ["4980MHz-4982MHz(99.11%)",  "4982MHz-4995MHz(99.22%)", "4999MHz-5010MHz(99.47%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.56", frequencies: { utilized: ["5010MHz-5021MHz(99.47%)",  "5021MHz-5034MHz(99.58%)", "5034MHz-5040MHz(99.65%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.79", frequencies: { utilized: ["5040MHz-5047MHz(99.65%)",  "5047MHz-5060MHz(99.74%)", "5060MHz-5070MHz(99.79%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5070MHz-5073MHz(99.79%)",  "5073MHz-5086MHz(99.84%)",  "5086MHz-5100MHz(99.89%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5100MHz-5113MHz(99.91%)", "5113MHz-5126MHz(99.94%)", "5126MHz-5130MHz(99.95%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5130MHz-5139MHz(99.95%)", "5139MHz-5152MHz(99.96%)", "5152MHz-5160MHz(99.96%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5160MHz-5165MHz(99.96%)",  "5165MHz-5178MHz(99.97%)","5178MHz-5190MHz(99.97%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5190MHz-5191MHz(99.97%)",  "5191MHz-5204MHz(99.98%)", "5204MHz-5220MHz(99.98%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5220MHz-5230MHz(99.98%)",  "5230MHz-5243MHz(99.98%)", "5243MHz-5250MHz(99.98%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5250MHz-5257MHz(99.98%)",  "5257MHz-5270MHz(99.97%)", "5270MHz-5220MHz(99.97%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5280MHz-5283MHz(99.97%)",  "5283MHz-5296MHz(99.97%)", "5296MHz-5308MHz(99.96%)", "5308MHz-5310MHz(99.96%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5310MHz- 5322MHz(99.96%)",  "5322MHz-5335MHz(99.95%)", "5335Hz-5340MHz(99.95%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5340MHz-5348MHz(99.95%)",  "5348MHz-5361MHz(99.92%)", "5361MHz-5370MHz(99.92%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5370MHz-5374MHz(99.92%)",  "5374MHz-5387MHz(99.92%)", "5387MHz- 5400MHz(99.94%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5400MHz-5413MHz(99.93%)",  "5413MHz-5426MHz(99.93%)", "5426MHz- 5400MHz(99.93%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5430MHz-5439MHz(99.93%)",  "5439MHz-5452MHz(99.92%)", "5452MHz- 5460MHz(99.93%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5460MHz-5465MHz(99.93%)",  "5465MHz-5478MHz(99.93%)", "5478MHz- 5490MHz(99.92%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5490MHz-5504MHz(99.94%)",  "5504MHz-5517MHz(99.94%)", "5517MHz- 5520MHz(99.93%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5520MHz-5530MHz(99.93%)",  "5530MHz-5543MHz(99.91%)", "5543MHz- 5550MHz(99.93%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5550MHz-5557MHz(99.93%)",  "5557MHz-5570MHz(99.94%)", "5570MHz- 5580MHz(99.92%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5580MHz-5583MHz(99.92%)",  "5583MHz-5596MHz(99.92%)", "5596MHz- 5610MHz(99.91%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5610MHz-5622MHz(99.91%)",  "5622MHz-5632MHz(99.92%)", "5635MHz- 5640MHz(99.92%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5640MHz-5648MHz(99.92%)",  "5648MHz-5661MHz(99.92%)", "5661MHz- 5670MHz(99.92%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5670MHz-5674MHz(99.92%)",  "5674MHz-5687MHz(99.93%)", "5687MHz- 5700MHz(99.93%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5700MHz-5713MHz(99.94%)",  "5713MHz-5726MHz(99.95%)", "5726MHz- 5730MHz(99.95%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5730MHz-5739MHz(99.95%)",  "5739MHz-5752MHz(99.96%)", "5752MHz- 5760MHz(99.97%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5760MHz-5765MHz(99.97%)",  "5765MHz-5778MHz(99.98%)", "5778MHz- 5790MHz(99.99%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5790MHz-5804MHz(99.99%)",  "5804MHz-5817MHz(99.99%)", "5817MHz- 5820MHz(99.99%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5820MHz-5830MHz(99.99%)",  "5830MHz-5843MHz(99.99%)", "5843MHz- 5850MHz(99.99%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "100", frequencies: { utilized: ["5850MHz-5857MHz(100%)",  "5857MHz-5870MHz(100%)", "5870MHz- 5880MHz(100%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "100", frequencies: { utilized: ["5880MHz-5883MHz(100%)",  "5883MHz-5896MHz(100%)", "5896MHz- 5910MHz(100%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "100", frequencies: { utilized: ["5910MHz-5922MHz(100%)",  "5922MHz-5935MHz(100%)", "5935MHz- 5940MHz(100%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "100", frequencies: { utilized: ["5940MHz-5948MHz(100%)",  "5948MHz-5961MHz(100%)", "5961MHz- 5970MHz(100%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "100", frequencies: { utilized: ["5970MHz-5974MHz(100%)",  "5974MHz-5987MHz(100%)", "5987MHz- 6000MHz(100%)"], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Airport",
          bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz-26.19MHz","26.19MHz-30.00MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "96.71",
                "frequencies": {
                  "utilized": ["39.23MHz","52.27MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "97.40",
                "frequencies": {
                  "utilized": ["65.32MHz","78.36MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "66.29",
                "frequencies": {
                  "utilized": ["91.40MHz","104.45MHz"],
                  "notutilized": ["117.49MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "O.046",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
            range: "300MHz-3GHZ",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz

        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "97.37",
                "frequencies": {
                  "utilized": ["39.23MHz","52.27MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "97.97",
                "frequencies": {
                  "utilized": ["65.32MHz","78.36MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "66.15",
                "frequencies": {
                  "utilized": ["91.40MHz","104.45MHz"],
                  "notutilized": ["117.49MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "O.0021",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0.0005",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
            range: "300MHz-3GHZ",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "42.38",
                "frequencies": {
                  "utilized": ["39.23MHz","52.27MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["65.32MHz","78.36MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["91.40MHz","104.45MHz"],
                  "notutilized": ["117.49MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
            range: "300MHz-3GHZ",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "31.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "94.82",
                "frequencies": {
                  "utilized": ["39.23MHz","52.27MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "95.54",
                "frequencies": {
                  "utilized": ["65.31MHHZ","78.35MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "64.05",
                "frequencies": {
                  "utilized": ["91.40MHz","104.45MHz"],
                  "notutilized": ["117.49MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHz", "195.75MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHz", "234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHz","287.05MHz","300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
            range: "300MHz-3GHZ",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz", "26.19MHz"]
            }
          }
        },
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "96.44",
                "frequencies": {
                  "utilized": ["39.23MHz", "52.27MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "97.13",
                "frequencies": {
                  "utilized": ["65.31MHz","78.36MHz"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "65.12",
                "frequencies": {
                  "utilized": ["91.40MHz","104.45MHz"],
                  "notutilized": ["117.48MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz", "169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.70MHz","195.74MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHz","234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHz","287.05MHz","300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
          range: "300MHZ-3GHZ",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-326.00MHz(0%)","326.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-339.00MHz(0%)","339.00MHz-352.00MHz(0%)","352.00MHz-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["360.00-365.00MHz(0%)","365.00MHz-378.00MHz(0%)","378.00MHz-390.00MHz(0%)",]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["390.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-430.00MHz(0%)","430.00-443.00MHz(0%)","443.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00-459.00MHz(0%","459.00-469.00MHz(0%)","459.00-480.00MHz(0%)"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["480.00-482.00MHz(0%)", "482.00-495.00MHz(0%)","495.00-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00-521.00MHz(0%)","521.00-534.00MHz(0%)","534.00-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00-547.00MHz(0%)","547.00-560.00MHz(0%)","560.00-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00-665.00MHz(0%)","665.00-678.00MHz(0%)","678.00-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0%)","704.00-717.00MHz(0%)","717.00-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00-730.00MHz(0%)","730.00-743.00MHz(0%)","743.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["750.00-756.00MHz(0%)","756.00-769.00MHz(0%)","769.00-780.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "1.19",
                frequencies: {
                  utilized: ["782.00MHz- 795.00MHz(3.19%)","795MHz- 808MHz(0.40%)"],
                  notutilized: ["780MHz- 782MHz(0%)", "808MHz- 810MHz(0%)"]
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["810.00-821.00MHz(0%)","821.00-834.00MHz(0%)", "834.00-840.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840.00-847.00MHz(0%)","847.00-860.00MHz(0%)", "860.00-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "66.63",
                frequencies: {
                  utilized: ["873MHz- 887MHz(99.94%)", "887MHz- 900MHz(99.93%)"],
                  notutilized: ["870MHz- 873MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["900MHz- 913MHz(99.91%)" ,"913MHz- 926MHz(99.95%)", ,"926MHz- 930MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["930MHz- 939MHz(99.97%)", "939MHz- 952MHz(99.97%)", "952MHz- 960MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "99.76",
                frequencies: {
                  utilized: [c, "965MHz- 978MHz(99.74%)","978MHz- 990MHz(99.74%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "99.71",
                frequencies: {
                  utilized: ["990MHz- 991MHz(99.74%)","991MHz- 1004MHz(99.72%)","1004MHz- 1017MHz(99.69%)", "1017MHz- 1020MHz(99.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "99.76",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(99.71%)", "1030MHz- 1043MHz(99.76%)","1043MHz- 1050MHz(99.76%)"


],                    notutilized: []
                }
              }
            },
            {
              range: "1050.00-1080.00MHz",
              result: {
                utilization: "99.83",
                frequencies: {
                  utilized: ["1050MHz- 1056MHz(99.79%)","1056MHz- 1069MHz(99.84%)","1069MHz- 1080MHz(99.85%)"




],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1080MHz-1082MHz(99.85%)", "1083MHz-1095MHz(99.88%)", "1095MHz-1110MHz(99.89%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1110MHz-1121MHz(99.91%)", "1121MHz-1134MHz(99.92%)", "1134MHz-1140MHz(99.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1140MHz-1147MHz(99.92%)", "1147MHz-1160MHz(99.93%)", "1160MHz-1170MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1170MHz-1173MHz(99.93%)", "1173MHz-1187MHz(99.94%)", "1187MHz-1200MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.93%)", "1213MHz-1226MHz(99.94%)", "1226MHz-1230MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1230MHz-1239MHz(99.94%)", "1239MHz-1252MHz(99.93%)", "1252MHz-1260MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.91%), 1265MHz-1278MHz(99.93%), 1278MHz-1290MHz(99.90%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1290MHz-1291MHz(99.0%)", "1291MHz-1304MHz(99.91%)","1304MHz-1317MHz(99.87%)", "1317MHz-1320MHz(99.86%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: ["1320MHz-1330MHz(99.86%)", "1330MHz-1343MHz(99.87%)", "1343MHz-1350MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "99.88",
                frequencies: {
                  utilized: ["1350MHz-1356MHz(99.87%)", "1356MHz-1369MHz(99.89%)", "1369MHz-1380MHz(99.90%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1380MHz-1382MHz(99.91%)"," 1382MHz-1395MHz(99.91%)", "1395MHz-1408MHz(99.30%)", "1408MHz-1410MHz(99.30%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1410MHz-1421MHz(99.93%)", "1421MHz-1434MHz(99.94%)", "1434MHz-1440MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.95%",
                frequencies: {
                  utilized: ["1440MHz-1449MHz(99.94%)", "1449MHz-1460MHz(99.95%)", "1460MHz-1470MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.96%",
                frequencies: {
                  utilized: ["1470MHz-1473MHz(99.95%)"," 1474MHz-1487MHz(99.96%)", "1487MHz-1500MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.96%)"," 1513MHz-1526MHz(99.96%)", "1526MHz-1530MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.95%)" ,"1539MHz-1552MHz(99.94%)", "1552MHz-1560MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.94%)", "1565MHz-1578MHz(99.94%)", "1578MHz-1590MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1590MHz-1591MHz(99.94%)","1591MHz-1604MHz(99.93%)", "1604MHz-1617MHz(99.93%)", "1617MHz-1620MHz(99.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1620MHz-1630MHz(99.92%)", "1630MHz-1643MHz(99.93%)", "1643MHz-1650MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1650MHz-1656MHz(99.93%)", "1656MHz-1669MHz(99.93%)", "1669MHz-1680MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1680MHz-1682MHz(99.93%)", "1682MHz-1695MHz(99.94%)", "1695MHz-1708MHz(99.95%)", "1708MHz-1710MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1710MHz-1721MHz(99.95%)", "1721MHz-1734MHz(99.95%)", "1745MHz-1740MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1740MHz-1747MHz(99.95%)", "1747MHz-1760MHz(99.96)", "1760MHz-1770MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1770MHz-1773MHz(99.96%)", "1773MHz-1787MHz(99.96%)", "1787MHz-1800MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(99.96%)", "1813MHz-1826MHz(99.98%)", "1826MHz-1830MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(99.98%)", "1839MHz-1852MHz(99.98%)", "1852MHz-1860MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(99.98%)", "1865MHz-1878MHz(99.98%)", "1878MHz-1890MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1890MHz-1904MHz(99.94%)", "1904MHz-1917MHz(99.93%)", "1917MHz-1920MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1920MHz-1930MHz(99.94%)", "1931MHz-1943MHz(99.98%)", "1943MHz-1950MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1950MHz-1956MHz(99.98%)", "1956MHz-1969MHz(99.98%)", "1969MHz-1980MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1980MHz-1982MHz(99.98%)", "1982MHz-1995MHz(99.98%)", "1995MHz-2008MHz(99.98%)","2008MHz-2010MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2010MHz-2021MHz(99.98%)", "2021MHz-2034MHz(99.98%)", "2034MHz-2040MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2040MHz-2047MHz(99.98%)", "2047MHz-2060MHz(99.98%)", "2060MHz-2070MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2070MHz- 2073MHz(99.98%)", "2073MHz- 2087MHz(99.98%)", "2087MHz- 2100MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(99.98%)", "2113MHz- 2126MHz(99.98%)", "2126MHz-2130MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(99.98%)", "2139MHz-2152MHz(99.98%)", "2152MHz-2160MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(99.98%)", "2165MHz-2178MHz(99.98%)", "2178MHz- 2190MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "81.28",
                frequencies: {
                  utilized: ["2190MHz-2191MHz(99.98%)", "2191MHz-2204MHz(99.98%)", "2204MHz-2217MHz(63.24%)", "2217MHz-2220MHz(61.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "60.99",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(61.93%)", "2230MHz-2243MHz(61.45%)", "2243MHz-2250MHz(59.61%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "59.77",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(59.61%)", "2256MHz-2269MHz(61.40%)", "2269MHz-2280MHz(58.31%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "59.39",
                frequencies: {
                  utilized: ["2280MHz-2282MHz(58.31%)", "2282MHz-2295MHz(60.42%)", "2295MHz-2308MHz(59.92%)", "2308MHz-2310MHz(59.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "69.96",
                frequencies: {
                  utilized: ["2310MHz-2321MHz(59.92%)", "2321MHz-2334MHz(58.64%)", "2334MHz-2340MHz(76.33%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "86.76",
                frequencies: {
                  utilized: ["2340MHz-2347MHz(76.33%)", "2347MHz-2360MHz(92.92%)","2360MHz-2370MHz(91.03%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "74.68",
                frequencies: {
                  utilized: ["2370MHz-2373MHz(91.03%)", "2373MHz-2387MHz(65.68%)","2387MHz-2400MHz(67.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "70.60",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(69.97%)", "2413MHz-2426MHz(70.23%)", "2426MHz- 2430MHz(71.70%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "71.75",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(71.70%)", "2439MHz- 2452MHz(71.36%)", "2452MHz- 2460MHz(72.18%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "72.12",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(72.18%)", "2465MHz- 2478MHz(72.65%)", "2478MHz- 2490MHz(71.53%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "72.39",
                frequencies: {
                  utilized: ["2490MHz- 2491MHz(71.53%)", "2491MHz- 2504MHz(71.41%)", "2504MHz- 2517MHz(72.64%)" ,"2517MHz- 2520MHz(73.12%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "74.19",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(73.12%)", "2530MHz- 2453MHz(74.49%)", "2453MHz- 2550MHz(74.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "76.71",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(74.96%)", "2556MHz- 2569MHz(75.19%)", "2569MHz- 2580MHz(79.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "90.77",
                frequencies: {
                  utilized: ["2580MHz- 2582MHz(79.99%)", "2582MHz- 2595MHz(94.94%)", "2595MHz- 2608MHz(94.63%)","2608MHz- 2610MHz(93.52%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "97.82",
                frequencies: {
                  utilized: ["2610MHz- 2621MHz(93.52%)", "2621MHz- 2634Hz(99.98%)", "2634Hz- 2640MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2640Hz- 2647MHz(99.98%)", "2647Hz- 2660MHz(99.98%)","2660Hz- 2670MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "93.75",
                frequencies: {
                  utilized: ["2670MHz- 2673MHz(99.98%)", "2673MHz- 2687MHz(99.94%)", "2687MHz - 2700MHz(81.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "77.51",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(76.63%)", "2713MHz- 2726MHz(75.08%)", "2726MHz 2730MHz(78.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "77.51",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(76.05%)", "2739MHz- 2752MHz(77.75%)", "2752MHz- 2760MHz(78.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "79.40",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(78.72%)", "2765MHz- 2778MHz(78.79%)", "2778MHz- 2790MHz(%),(80.07%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "82.44",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(80.07%)", "2791MHz- 2804MHz(81.03%)", "2804MHz- 2817MHz(84.33%)", "2817MHz- 2820MHz(83.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "84.86",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(83.72%)", "2830MHz- 2843MHz(85.59%)", "2843MHz- 2850MHz(85.29%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "85.87",
                frequencies: {
                  utilized: ["2850MHz- 2856MHz(85.29%)", "2856MHz- 2869MHz(84.29%)", "2869MHz- 2880MHz(86.04%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "86.09",
                frequencies: {
                  utilized: ["2880MHz- 2882MHz(86.04%)", "2882MHz- 2895MHz(86.72%)", "2895MHz- 2908MHz(86.21%)", "2908MHz- 2910MHz(85.41%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "84.96",
                frequencies: {
                  utilized: ["2910MHz- 2921MHz(85.41%)",  "2921MHz- 2934MHz(84.89%)", "2934MHz- 2940MHz(84.57%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "84.25",
                frequencies: {
                  utilized: ["2940MHz- 2947MHz(84.57%)", "2947MHz- 2960MHz(84.49%)", "2960MHz- 2970MHz(83.69%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "84.03",
                frequencies: {
                  utilized: ["2970MHz- 2973MHz(83.69%)", "2973MHz- 2987MHz(85.30%)", "2987MHz- 3000MHz(83.10%)"],
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
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "42.64", frequencies: { utilized: ["3000MHz-3013MHz(43.81%)", "3013MHz-3026MHz(40.28%)", "3026MHz- 3030MHz(43.81%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "52.34", frequencies: { utilized: ["3030MHz-3039MHz(46.74%),  3039MHz-3052MHz(45.49%), 3052MHz-3060MHz(50.90%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "49.94", frequencies: { utilized: ["3060MHz-3065MHz(50.90%)", "3065MHz-3078MHz(48.46%)", "3078MHz-3090MHz(50.43%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "53.54", frequencies: { utilized: ["3090MHz-3091MHz(50.43%)", "3091MHz-3104MHz(51.68%)", "3104MHz-3117MHz(56.73%)","3117MHz-3120MHz(55.31%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "56.82", frequencies: { utilized: ["3120MHz-3130MHz(55.31%)", "3130MHz-3143MHz(56.77%)", "3143MHz-3150MHz(58.39%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "59.53", frequencies: { utilized: ["3150MHz-3156MHz(58.39%)", "3156MHz-3169MHz(59.77%)",  "3169MHz-3180MHz(60.43%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "61.23", frequencies: { utilized: ["3180MHz-3182MHz(60.43%)", "3182MHz-3195MHz(60.59%)",  "3195MHz-3210MHz(62.72%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "62.11", frequencies: { utilized: ["3210MHz-3221MHz(61.63%)", "3221MHz-3234MHz(62.51%)",  "3234MHz-3240MHz(62.21%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "62.36", frequencies: { utilized: ["3240MHz-3247MHz(62.21%)", "3247MHz-3260MHz(62.77%)",  "3260MHz-3270MHz(62.08%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "62.19", frequencies: { utilized: ["3270MHz- 3273MHz(62.08%)", "3273MHz-3287MHz(62.22%)", "3287MHz-3300MHz(62.56%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "61.75", frequencies: { utilized: ["300MHz-3313MHz(62.56%)", "3313MHz-3326MHz(61.24%)",  "3326MHz-3330MHz(61.45%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "61.87", frequencies: { utilized: ["3330MHz-3339MHz(61.45%)", "3339MHz-3352MHz(61.65%)", "3352MHz-3360MHz(62.51%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "62.15", frequencies: { utilized: ["3360MHz-3365MHz(62.51%)", "3365MHz-3378MHz(62.03%)",  "3378MHz-3390MHz(61.94%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "62.76", frequencies: { utilized: ["3390MHz-3391MHz(61.94%)", "3391MHz-3404MHz(62.33%)", "3404MHz-3417MHz(63.71%)", "3417MHz-3420MHz(63.07%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "62.87", frequencies: { utilized: ["3420MHz-3430MHz(63.07%)",  "3430MHz-3443MHz(62.58%)", "3443MHz-3450MHz(62.97%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "62.40", frequencies: { utilized: ["3450MHz-3456MHz(62.97%)", "3456MHz-3469MHz(62.41%)", "3469MHz-3480MHz(61.83%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "65.00", frequencies: { utilized: ["3480MHz-3482MHz(61.83%)", "3482MHz-3495MHz(59.58%)", "3495MHz - 3508MHz(66.66%)", "3508MHz-3510MHz(71.83%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "70.85", frequencies: { utilized: ["3510MHz-3521MHz(71.83%)",   "3521MHz-3534MHz(68.24%)", "3534MHz-3540MHz(72.48%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "73.38", frequencies: { utilized: ["3540MHz-3547MHz(72.48%)",  "3547MHz-3560MHz(76.45%)", "3560MHz-3570MHz(71.22%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "71.84", frequencies: { utilized: ["3570MHz-3573MHz(71.22%)", "3573MHz-3586MHz(74.89%)", "3586MHz-3600MHz(69.42%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "56.70", frequencies: { utilized: ["3600MHz- 3613MHz(62.61%)", "3613MHz-3626MHz(53.98%)", "3626MHz-3630MHz(53.53%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "51.46", frequencies: { utilized: ["3630MHz-3639MHz(53.53%)", "3639MHz-3652MHz(51.58%)", "3652MHz-3660MHz(49.28%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "47.11", frequencies: { utilized: ["3660MHz-3665MHz(49.28%)", "3665MHz-3678MHz(47.11%)", "3678MHz-3690MHz(45.82%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "44.92", frequencies: { utilized: ["3690MHz-3691MHz(45.82%)", "3691MHz-3704MHz(45.00%)", "3704MHz-3717MHz(44.68%)" ,"3717MHz-3720MHz(44.20%)" ], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "44.67", frequencies: { utilized: ["3720MHz-3730MHz(44.20%)", "3730MHz-3743MHz(44.24%)", "3743MHz-3750MHz(44.95%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "45.81", frequencies: { utilized: ["3750MHz-3756MHz(44.95%)",  "3756MHz-3769MHz(45.60%)", "3769MHz-3780MHz(46.90%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "48.82", frequencies: { utilized: [" 3780MHz-3782MHz(46.90%)", "3782MHz-3795MHz(47.47%)", "3795MHz-3808MHz(50.20%)"," 3808MHz-3810MHz(50.71%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "52.18", frequencies: { utilized: ["3810MHz-3821MHz(50.71%)","3821MHz-3835MHz(52.81%)"," 3835MHz-3840MHz(53.02%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "53.74", frequencies: { utilized: ["3840MHz-3847MHz(53.02%)"," 3847MHz-3860MHz(53.72%)", "3860MHz-3870MHz(54.49%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "54.58", frequencies: { utilized: ["3870MHz-3873MHz(54.49%)", "3873MHz-3886MHz(55.05%)", "3886MHz-3900MHz(54.19%)"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "51.32", frequencies: { utilized: ["3900MHz-3913MHz(53.01%)", "3913MHz-3926MHz(51.51%)", "3926MHz-3930MHz(49.43%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "48.55", frequencies: { utilized: ["3930MHz-3939MHz(49.43%)", "3939MHz-3952MHz(48.04%)", "3952MHz-3960MHz(48.18%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "48.80", frequencies: { utilized: ["3960MHz-3965MHz(48.18%)",  "3965MHz-3978MHz(48.62%)", "3978MHz-3990MHz(49.60%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "52.13", frequencies: { utilized: ["3990MHz-3991MHz(49.60%)", "3991MHz-4004MHz(51.35%)", "4004MHz-4017MHz(53.18%)", "4017MHz-4020MHz(54.40%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "55.90", frequencies: { utilized: ["4020MHz- 4030MHz(54.40%)", "4030MHz-4043MHz(55.49%)", "4043MHz-4050MHz(57.80%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "59.33", frequencies: { utilized: ["4050MHz-4056MHz(57.80%)", "4056MHz-4069MHz(62.08%)", "4069MHz-4080MHz(63.57%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "62.77", frequencies: { utilized: ["4080MHz-4082MHz(61.18%)", "4082MHz-4095MHz(68.22%)", "4095MHz-4110MHz(69.38%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "63.99", frequencies: { utilized: ["4110MHz-4121MHz(69.38%)",  "4121MHz-4134MHz(67.97%)", "4134MHz-4140MHz(64.57%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "65.89", frequencies: { utilized: ["4140MHz-4147MHz(64.57%)", "4147MHz-4160MHz(65.33%)", "4160MHz-4170MHz(66.89%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "68.32", frequencies: { utilized: ["4170MHz-4173MHz(66.89%)", "4173MHz-4186MHz(68.49%)", "4186MHz-4200MHz(69.58%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "71.14", frequencies: { utilized: ["4200MHz-4213MHz(70.39%)", "4213MHz-4226MHz(71.26%)", "4226MHz-4230MHz(71.77%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "73.32", frequencies: { utilized: ["4230MHz-4239MHz(71.77%)", "4239MHz-4252MHz(73.32%)", "4252MHz-4260MHz(74.88%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "76.43", frequencies: { utilized: ["4260MHz-4265MHz(74.88%)",  "4265MHz-4278MHz(76.30%)", "4278MHz-4290MHz(78.11%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "79.28", frequencies: { utilized: ["4290MHz-4291MHz(78.11%)",  "4291MHz-4304MHz(78.67%)", "4304MHz-4317MHz(79.49%)","4317MHz-4320MHz(80.84%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "85.67", frequencies: { utilized: ["4320MHz-4330MHz(80.84%)", "4330MHz-4343MHz(82.00%)", "4343MHz-4350MHz(83.43%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "85.08", frequencies: { utilized: ["4350MHz-4356MHz(83.43%)", "4356MHz-4369MHz(85.38%)", "4369MHz-4380MHz(86.44%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "88.39", frequencies: { utilized: ["4380MHz-4382MHz(83.43%)", "4382MHz-4395MHz(87.84%)", "4395MHz-4408MHz(89.11%)" , "4408MHz-4410MHz(90.16%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "91.22", frequencies: { utilized: ["4410MHz-4421MHz(90.16%)", "4421MHz-4434MHz(91.18%)", "4434MHz-4440MHz(92.32%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "92.94", frequencies: { utilized: ["4440MHz-4447MHz(92.32%)", "4447MHz-4460MHz(92.83%)", "4460MHz-4470MHz(93.68%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "94.14", frequencies: { utilized: ["4470MHz-4473MHz(93.68%)", "4473MHz-4486MHz(94.29%)", "4486MHz-4500MHz(94.45%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "94.91", frequencies: { utilized: ["4500MHz-4513MHz(94.81%)", "4513MHz-4526MHz(95.02%)", "4526MHz-4530MHz(94.89%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "94.83", frequencies: { utilized: ["4530MHz-4539MHz(94.89%)", "4539MHz-4552MHz(94.93%)", "4552MHz-4560MHz(94.68%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "94.44", frequencies: { utilized: ["4560MHz-4565MHz(94.68%)", "4565MHz-4578MHz(94.44%)", "4578MHz-4590MHz(94.20%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "93.83", frequencies: { utilized: ["4590MHz-4591MHz(94.20%)",  "4591MHz-4604MHz(94.08%)", "4604MHz-4617MHz(93.74%)", "4617MHz-4620MHz(93.30%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "92.83", frequencies: { utilized: ["4620MHz-4630MHz(93.30%)",  "4630MHz-4643MHz(92.70%)","4643MHz- 4650MHz(92.48%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "92.38", frequencies: { utilized: ["4650MHz- 4656MHz(92.48%)", "4656MHz- 4670MHz(92.18%)", "4670MHz- 4680MHz(92.48%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "92.89", frequencies: { utilized: ["4680MHz- 4682MHz(92.48%)", "4682MHz-4695MHz(92.59%)", "4695MHz- 4708MHz(93.00%)", "4708MHz-4710MHz(93.49%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "93.99", frequencies: { utilized: ["4710MHz- 4721MHz(93.49%)", "4721MHz-4734MHz(93.96%)", "4734MHz-4740MHz(94.53%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "95.25", frequencies: { utilized: ["4740MHz-4747MHz(94.53%)", "4747MHz-4760MHz(95.34%)", "4760MHz-4770MHz(95.88%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "96.46", frequencies: { utilized: ["4770MHz-4773MHz(95.88%)", "4773MHz-4786MHz(96.50%)", "4786MHz-4800MHz(97.01%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "97.73", frequencies: { utilized: ["4800MHz-4813MHz(97.28%)", "4813MHz-4826MHz(97.65%)", "4826MHz-4830MHz(97.69%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "97.77", frequencies: { utilized: ["4830MHz-4839MHz(97.69%)", "4839MHz-4852MHz(97.86%)", "4852MHz-4860MHz(97.76)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "97.79", frequencies: { utilized: ["4860MHz-4865MHz(97.76%)", "4865MHz-4878MHz(97.80%)", "4878MHz-4890MHz(97.81%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "97.77", frequencies: { utilized: ["4890MHz-4891MHz(97.81%)",  "4891MHz-4904MHz(97.76%)", "4904MHz-4917MHz(97.75%)","4917MHz-4920MHz(97.75%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "97.95", frequencies: { utilized: ["4920MHz-4930MHz(97.75%)", "4930MHz-4943MHz(98.23%)", "4943MHz-4950MHz(98.23%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.21", frequencies: { utilized: ["4950MHz-4956MHz(97.88%)",  "4956MHz-4969MHz(98.23%)", "4969MHz-4980MHz(98.52%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "98.85", frequencies: { utilized: ["4980MHz-4982MHz(98.52%) ", "4982MHz-4995MHz(98.73%)", "4995MHz-5008MHz(98.99%)","5008MHz-5010MHz(99.18%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.34", frequencies: { utilized: ["5010MHz-5021MHz(99.18%)",  "5021MHz-5034MHz(99.37%)", "5034MHz-5040MHz(99.45%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.57", frequencies: { utilized: ["5040MHz-5047MHz(99.45%)",  "5047MHz-5060MHz(99.61%)", "5060MHz-5070MHz(99.65%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5070MHz-5073MHz(99.65%)",  "5073MHz-5086MHz(99.71%)",  "5086MHz-5100MHz(99.80%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5100MHz-5113MHz(99.86%)", "5113MHz-5126MHz(99.86%)", "5126MHz-5130MHz(99.89%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5130MHz-5139MHz(99.89%)", "5139MHz-5152MHz(99.91%)", "5152MHz-5160MHz(99.91%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5160MHz-5165MHz(99.91%)",  "5165MHz-5178MHz(99.90%)","5178MHz-5190MHz(99.92%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5190MHz-5191MHz(99.92%)",  "5191MHz-5204MHz(99.92%)", "5204MHz-5217MHz(99.94%)","5217MHz-5220MHz(99.94%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5220MHz-5230MHz(99.94%)",  "5230MHz-5243MHz(99.94%)", "5243MHz-5250MHz(99.94%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5250MHz-5256MHz(99.94%)",  "5256MHz-5269MHz(99.94%)", "5269MHz-5280MHz(99.93%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5280MHz-5282MHz(99.93%)",  "5282MHz-5295MHz(99.92%)", "5295MHz-5308MHz(99.92%)", "5308MHz-5310MHz(99.91%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5310MHz- 5321MHz(99.89%)",  "5321MHz-5334MHz(99.89%)", "5335Hz-5340MHz(99.89%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5340MHz-5347MHz(99.89%)",  "5348MHz-5360MHz(99.86%)", "5361MHz-5370MHz(99.84%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5370MHz-5373MHz(99.84%)",  "5373MHz-5386MHz(99.85%)", "5386MHz- 5400MHz(99.85%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5400MHz-5413MHz(99.87%)",  "5413MHz-5426MHz(99.86%)", "5426MHz- 5430MHz(99.85%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5430MHz-5439MHz(99.85%)",  "5439MHz-5452MHz(99.86%)", "5452MHz- 5460MHz(99.86%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5460MHz-5465MHz(99.86%)",  "5465MHz-5478MHz(99.84%)", "5478MHz- 5490MHz(99.94%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5490MHz-5504MHz(99.84%)",  "5504MHz-5517MHz(99.85%)", "5517MHz- 5520MHz(99.85%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5520MHz-5530MHz(99.85%)",  "5530MHz-5543MHz(99.86%)", "5543MHz- 5550MHz(99.85%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5550MHz-5556MHz(99.85%)",  "5556MHz-5569MHz(99.85%)", "5569MHz- 5580MHz(99.83%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5580MHz-5582MHz(99.83%)",  "5582MHz-5595MHz(99.83%)", "5595MHz- 5608MHz(99.83%)","5608MHz-5610MHZ(99.85%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5610MHz-5621MHz(99.85%)",  "5621MHz-5634MHz(99.82%)", "5634MHz- 5640MHz(99.84%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5640MHz-5647MHz(99.84%)",  "5647MHz-5660MHz(99.84%)", "5660MHz- 5670MHz(99.83%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5670MHz-5673MHz(99.83%)",  "5673MHz-5686MHz(99.86%)", "5686MHz- 5700MHz(99.86%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5700MHz-5713MHz(99.87%)",  "5713MHz-5726MHz(99.90%)", "5726MHz- 5730MHz(99.90%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5730MHz-5739MHz(99.90%)",  "5739MHz-5752MHz(99.90%)", "5752MHz- 5760MHz(99.92%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5760MHz-5765MHz(99.92%)",  "5765MHz-5778MHz(99.94%)", "5778MHz- 5790MHz(99.94%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5790MHz-5804MHz(99.94%)",  "5804MHz-5817MHz(99.95%)", "5817MHz- 5820MHz(99.96%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5820MHz-5830MHz(99.96%)",  "5830MHz-5843MHz(99.96%)", "5843MHz- 5850MHz(99.96%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5850MHz-5857MHz(99.96%)",  "5855MHz-5869MHz(99.96%)", "5869MHz- 5880MHz(99.97%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5880MHz-5882MHz(99.97%)",  "5882MHz-5895MHz(99.97%)", "5895MHz- 5908MHz(99.97%)","5908MHz- 5910MHz(99.97%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5910MHz-5921MHz(99.97%)",  "5922MHz-5934MHz(99.97%)", "5934MHz- 5940MHz(99.97%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5940MHz-5947MHz(99.97%)",  "5947MHz-5960MHz(99.97%)", "5960MHz- 5970MHz(99.97%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5970MHz-5973MHz(99.97%)",  "5973MHz-5986MHz(99.97%)", "5986MHz- 6000MHz(99.97%)"], notutilized: [] } } },
          ]
        },
        ]
    },
    {
      id: 5,
      location: "Lokoja Kogi",
      bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "0.16",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["39.23MHz","53.27MHz", ]
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "0.40",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["65.32MHz","78.36MHz"]
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "0.51",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["91.40MHz","104.45MHz","117.49MHz"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHz","260.87MHz"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHz","287.05MHz", "300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3Ghz
        {
            range: "300MHz-3GHZ",
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