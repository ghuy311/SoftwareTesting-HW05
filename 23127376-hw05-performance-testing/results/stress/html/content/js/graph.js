/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 5218.0, "series": [{"data": [[0.0, 2.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 10.0], [0.5, 11.0], [0.6, 12.0], [0.7, 13.0], [0.8, 14.0], [0.9, 14.0], [1.0, 15.0], [1.1, 18.0], [1.2, 20.0], [1.3, 21.0], [1.4, 25.0], [1.5, 28.0], [1.6, 30.0], [1.7, 31.0], [1.8, 34.0], [1.9, 37.0], [2.0, 41.0], [2.1, 46.0], [2.2, 49.0], [2.3, 54.0], [2.4, 58.0], [2.5, 61.0], [2.6, 67.0], [2.7, 75.0], [2.8, 83.0], [2.9, 94.0], [3.0, 121.0], [3.1, 129.0], [3.2, 135.0], [3.3, 141.0], [3.4, 144.0], [3.5, 146.0], [3.6, 148.0], [3.7, 150.0], [3.8, 156.0], [3.9, 159.0], [4.0, 162.0], [4.1, 166.0], [4.2, 169.0], [4.3, 172.0], [4.4, 176.0], [4.5, 178.0], [4.6, 180.0], [4.7, 183.0], [4.8, 184.0], [4.9, 186.0], [5.0, 190.0], [5.1, 196.0], [5.2, 199.0], [5.3, 201.0], [5.4, 206.0], [5.5, 210.0], [5.6, 215.0], [5.7, 221.0], [5.8, 227.0], [5.9, 234.0], [6.0, 252.0], [6.1, 266.0], [6.2, 269.0], [6.3, 274.0], [6.4, 275.0], [6.5, 279.0], [6.6, 284.0], [6.7, 286.0], [6.8, 288.0], [6.9, 290.0], [7.0, 292.0], [7.1, 294.0], [7.2, 295.0], [7.3, 297.0], [7.4, 298.0], [7.5, 300.0], [7.6, 301.0], [7.7, 302.0], [7.8, 303.0], [7.9, 305.0], [8.0, 306.0], [8.1, 308.0], [8.2, 311.0], [8.3, 312.0], [8.4, 314.0], [8.5, 315.0], [8.6, 317.0], [8.7, 319.0], [8.8, 320.0], [8.9, 321.0], [9.0, 322.0], [9.1, 324.0], [9.2, 326.0], [9.3, 329.0], [9.4, 334.0], [9.5, 337.0], [9.6, 339.0], [9.7, 340.0], [9.8, 341.0], [9.9, 343.0], [10.0, 346.0], [10.1, 349.0], [10.2, 352.0], [10.3, 354.0], [10.4, 356.0], [10.5, 358.0], [10.6, 362.0], [10.7, 365.0], [10.8, 366.0], [10.9, 367.0], [11.0, 369.0], [11.1, 371.0], [11.2, 373.0], [11.3, 376.0], [11.4, 378.0], [11.5, 379.0], [11.6, 380.0], [11.7, 381.0], [11.8, 382.0], [11.9, 383.0], [12.0, 386.0], [12.1, 388.0], [12.2, 391.0], [12.3, 393.0], [12.4, 395.0], [12.5, 397.0], [12.6, 398.0], [12.7, 399.0], [12.8, 401.0], [12.9, 403.0], [13.0, 405.0], [13.1, 407.0], [13.2, 410.0], [13.3, 413.0], [13.4, 415.0], [13.5, 417.0], [13.6, 418.0], [13.7, 419.0], [13.8, 421.0], [13.9, 423.0], [14.0, 426.0], [14.1, 427.0], [14.2, 429.0], [14.3, 430.0], [14.4, 432.0], [14.5, 434.0], [14.6, 436.0], [14.7, 437.0], [14.8, 440.0], [14.9, 441.0], [15.0, 443.0], [15.1, 444.0], [15.2, 445.0], [15.3, 446.0], [15.4, 447.0], [15.5, 449.0], [15.6, 451.0], [15.7, 452.0], [15.8, 453.0], [15.9, 455.0], [16.0, 456.0], [16.1, 457.0], [16.2, 457.0], [16.3, 458.0], [16.4, 459.0], [16.5, 460.0], [16.6, 461.0], [16.7, 462.0], [16.8, 462.0], [16.9, 464.0], [17.0, 465.0], [17.1, 466.0], [17.2, 468.0], [17.3, 470.0], [17.4, 472.0], [17.5, 473.0], [17.6, 475.0], [17.7, 476.0], [17.8, 479.0], [17.9, 482.0], [18.0, 484.0], [18.1, 486.0], [18.2, 489.0], [18.3, 490.0], [18.4, 491.0], [18.5, 492.0], [18.6, 494.0], [18.7, 496.0], [18.8, 497.0], [18.9, 500.0], [19.0, 502.0], [19.1, 503.0], [19.2, 504.0], [19.3, 505.0], [19.4, 506.0], [19.5, 508.0], [19.6, 510.0], [19.7, 514.0], [19.8, 515.0], [19.9, 517.0], [20.0, 518.0], [20.1, 520.0], [20.2, 523.0], [20.3, 525.0], [20.4, 527.0], [20.5, 527.0], [20.6, 528.0], [20.7, 530.0], [20.8, 531.0], [20.9, 532.0], [21.0, 534.0], [21.1, 535.0], [21.2, 536.0], [21.3, 537.0], [21.4, 538.0], [21.5, 539.0], [21.6, 540.0], [21.7, 541.0], [21.8, 541.0], [21.9, 543.0], [22.0, 544.0], [22.1, 546.0], [22.2, 547.0], [22.3, 548.0], [22.4, 549.0], [22.5, 550.0], [22.6, 550.0], [22.7, 551.0], [22.8, 552.0], [22.9, 553.0], [23.0, 553.0], [23.1, 554.0], [23.2, 555.0], [23.3, 556.0], [23.4, 557.0], [23.5, 558.0], [23.6, 559.0], [23.7, 560.0], [23.8, 561.0], [23.9, 562.0], [24.0, 563.0], [24.1, 564.0], [24.2, 565.0], [24.3, 567.0], [24.4, 568.0], [24.5, 570.0], [24.6, 571.0], [24.7, 572.0], [24.8, 575.0], [24.9, 576.0], [25.0, 577.0], [25.1, 579.0], [25.2, 579.0], [25.3, 581.0], [25.4, 582.0], [25.5, 583.0], [25.6, 584.0], [25.7, 585.0], [25.8, 586.0], [25.9, 587.0], [26.0, 588.0], [26.1, 590.0], [26.2, 590.0], [26.3, 591.0], [26.4, 592.0], [26.5, 593.0], [26.6, 593.0], [26.7, 594.0], [26.8, 595.0], [26.9, 596.0], [27.0, 597.0], [27.1, 599.0], [27.2, 600.0], [27.3, 600.0], [27.4, 601.0], [27.5, 602.0], [27.6, 604.0], [27.7, 605.0], [27.8, 607.0], [27.9, 608.0], [28.0, 610.0], [28.1, 611.0], [28.2, 612.0], [28.3, 614.0], [28.4, 616.0], [28.5, 617.0], [28.6, 619.0], [28.7, 619.0], [28.8, 620.0], [28.9, 621.0], [29.0, 622.0], [29.1, 624.0], [29.2, 625.0], [29.3, 625.0], [29.4, 627.0], [29.5, 627.0], [29.6, 629.0], [29.7, 630.0], [29.8, 631.0], [29.9, 632.0], [30.0, 633.0], [30.1, 634.0], [30.2, 635.0], [30.3, 636.0], [30.4, 636.0], [30.5, 638.0], [30.6, 638.0], [30.7, 639.0], [30.8, 641.0], [30.9, 642.0], [31.0, 643.0], [31.1, 643.0], [31.2, 644.0], [31.3, 645.0], [31.4, 646.0], [31.5, 647.0], [31.6, 648.0], [31.7, 649.0], [31.8, 650.0], [31.9, 650.0], [32.0, 652.0], [32.1, 653.0], [32.2, 654.0], [32.3, 655.0], [32.4, 655.0], [32.5, 656.0], [32.6, 657.0], [32.7, 657.0], [32.8, 658.0], [32.9, 659.0], [33.0, 660.0], [33.1, 660.0], [33.2, 661.0], [33.3, 662.0], [33.4, 662.0], [33.5, 662.0], [33.6, 663.0], [33.7, 664.0], [33.8, 664.0], [33.9, 665.0], [34.0, 666.0], [34.1, 667.0], [34.2, 668.0], [34.3, 669.0], [34.4, 669.0], [34.5, 670.0], [34.6, 671.0], [34.7, 672.0], [34.8, 672.0], [34.9, 673.0], [35.0, 674.0], [35.1, 674.0], [35.2, 675.0], [35.3, 676.0], [35.4, 677.0], [35.5, 678.0], [35.6, 679.0], [35.7, 680.0], [35.8, 681.0], [35.9, 682.0], [36.0, 684.0], [36.1, 686.0], [36.2, 687.0], [36.3, 688.0], [36.4, 688.0], [36.5, 689.0], [36.6, 690.0], [36.7, 691.0], [36.8, 692.0], [36.9, 693.0], [37.0, 693.0], [37.1, 695.0], [37.2, 696.0], [37.3, 697.0], [37.4, 698.0], [37.5, 699.0], [37.6, 700.0], [37.7, 701.0], [37.8, 701.0], [37.9, 702.0], [38.0, 703.0], [38.1, 703.0], [38.2, 704.0], [38.3, 704.0], [38.4, 705.0], [38.5, 706.0], [38.6, 707.0], [38.7, 707.0], [38.8, 708.0], [38.9, 709.0], [39.0, 710.0], [39.1, 710.0], [39.2, 711.0], [39.3, 712.0], [39.4, 714.0], [39.5, 715.0], [39.6, 716.0], [39.7, 717.0], [39.8, 718.0], [39.9, 719.0], [40.0, 720.0], [40.1, 722.0], [40.2, 723.0], [40.3, 724.0], [40.4, 726.0], [40.5, 727.0], [40.6, 728.0], [40.7, 729.0], [40.8, 730.0], [40.9, 731.0], [41.0, 732.0], [41.1, 733.0], [41.2, 735.0], [41.3, 737.0], [41.4, 739.0], [41.5, 741.0], [41.6, 743.0], [41.7, 745.0], [41.8, 749.0], [41.9, 750.0], [42.0, 751.0], [42.1, 753.0], [42.2, 754.0], [42.3, 755.0], [42.4, 757.0], [42.5, 759.0], [42.6, 760.0], [42.7, 760.0], [42.8, 761.0], [42.9, 762.0], [43.0, 763.0], [43.1, 763.0], [43.2, 764.0], [43.3, 765.0], [43.4, 766.0], [43.5, 768.0], [43.6, 770.0], [43.7, 771.0], [43.8, 773.0], [43.9, 776.0], [44.0, 777.0], [44.1, 779.0], [44.2, 780.0], [44.3, 782.0], [44.4, 783.0], [44.5, 784.0], [44.6, 785.0], [44.7, 786.0], [44.8, 787.0], [44.9, 788.0], [45.0, 789.0], [45.1, 790.0], [45.2, 791.0], [45.3, 792.0], [45.4, 793.0], [45.5, 795.0], [45.6, 796.0], [45.7, 797.0], [45.8, 798.0], [45.9, 799.0], [46.0, 800.0], [46.1, 801.0], [46.2, 802.0], [46.3, 803.0], [46.4, 805.0], [46.5, 805.0], [46.6, 806.0], [46.7, 808.0], [46.8, 809.0], [46.9, 810.0], [47.0, 811.0], [47.1, 812.0], [47.2, 813.0], [47.3, 814.0], [47.4, 815.0], [47.5, 816.0], [47.6, 818.0], [47.7, 819.0], [47.8, 821.0], [47.9, 822.0], [48.0, 823.0], [48.1, 825.0], [48.2, 826.0], [48.3, 827.0], [48.4, 828.0], [48.5, 830.0], [48.6, 831.0], [48.7, 832.0], [48.8, 833.0], [48.9, 835.0], [49.0, 837.0], [49.1, 839.0], [49.2, 840.0], [49.3, 841.0], [49.4, 842.0], [49.5, 843.0], [49.6, 843.0], [49.7, 844.0], [49.8, 845.0], [49.9, 847.0], [50.0, 848.0], [50.1, 848.0], [50.2, 849.0], [50.3, 850.0], [50.4, 851.0], [50.5, 852.0], [50.6, 853.0], [50.7, 853.0], [50.8, 854.0], [50.9, 855.0], [51.0, 856.0], [51.1, 857.0], [51.2, 858.0], [51.3, 858.0], [51.4, 859.0], [51.5, 860.0], [51.6, 861.0], [51.7, 862.0], [51.8, 862.0], [51.9, 863.0], [52.0, 864.0], [52.1, 866.0], [52.2, 866.0], [52.3, 867.0], [52.4, 868.0], [52.5, 868.0], [52.6, 869.0], [52.7, 869.0], [52.8, 870.0], [52.9, 871.0], [53.0, 871.0], [53.1, 872.0], [53.2, 873.0], [53.3, 874.0], [53.4, 876.0], [53.5, 877.0], [53.6, 878.0], [53.7, 879.0], [53.8, 880.0], [53.9, 881.0], [54.0, 882.0], [54.1, 884.0], [54.2, 885.0], [54.3, 887.0], [54.4, 889.0], [54.5, 890.0], [54.6, 893.0], [54.7, 894.0], [54.8, 896.0], [54.9, 898.0], [55.0, 900.0], [55.1, 901.0], [55.2, 902.0], [55.3, 903.0], [55.4, 904.0], [55.5, 905.0], [55.6, 907.0], [55.7, 908.0], [55.8, 911.0], [55.9, 913.0], [56.0, 915.0], [56.1, 916.0], [56.2, 918.0], [56.3, 919.0], [56.4, 921.0], [56.5, 923.0], [56.6, 925.0], [56.7, 926.0], [56.8, 928.0], [56.9, 929.0], [57.0, 930.0], [57.1, 932.0], [57.2, 933.0], [57.3, 935.0], [57.4, 937.0], [57.5, 939.0], [57.6, 940.0], [57.7, 941.0], [57.8, 942.0], [57.9, 942.0], [58.0, 944.0], [58.1, 945.0], [58.2, 947.0], [58.3, 948.0], [58.4, 951.0], [58.5, 953.0], [58.6, 954.0], [58.7, 957.0], [58.8, 958.0], [58.9, 959.0], [59.0, 962.0], [59.1, 963.0], [59.2, 964.0], [59.3, 965.0], [59.4, 967.0], [59.5, 968.0], [59.6, 968.0], [59.7, 969.0], [59.8, 970.0], [59.9, 970.0], [60.0, 971.0], [60.1, 972.0], [60.2, 973.0], [60.3, 974.0], [60.4, 975.0], [60.5, 976.0], [60.6, 977.0], [60.7, 978.0], [60.8, 979.0], [60.9, 979.0], [61.0, 980.0], [61.1, 981.0], [61.2, 981.0], [61.3, 982.0], [61.4, 984.0], [61.5, 985.0], [61.6, 986.0], [61.7, 987.0], [61.8, 988.0], [61.9, 989.0], [62.0, 991.0], [62.1, 992.0], [62.2, 993.0], [62.3, 994.0], [62.4, 996.0], [62.5, 997.0], [62.6, 998.0], [62.7, 1000.0], [62.8, 1001.0], [62.9, 1002.0], [63.0, 1004.0], [63.1, 1007.0], [63.2, 1009.0], [63.3, 1010.0], [63.4, 1011.0], [63.5, 1013.0], [63.6, 1014.0], [63.7, 1014.0], [63.8, 1015.0], [63.9, 1016.0], [64.0, 1017.0], [64.1, 1018.0], [64.2, 1019.0], [64.3, 1021.0], [64.4, 1022.0], [64.5, 1023.0], [64.6, 1025.0], [64.7, 1026.0], [64.8, 1029.0], [64.9, 1030.0], [65.0, 1031.0], [65.1, 1032.0], [65.2, 1034.0], [65.3, 1036.0], [65.4, 1037.0], [65.5, 1038.0], [65.6, 1039.0], [65.7, 1040.0], [65.8, 1042.0], [65.9, 1044.0], [66.0, 1045.0], [66.1, 1046.0], [66.2, 1047.0], [66.3, 1049.0], [66.4, 1050.0], [66.5, 1052.0], [66.6, 1053.0], [66.7, 1055.0], [66.8, 1056.0], [66.9, 1058.0], [67.0, 1063.0], [67.1, 1066.0], [67.2, 1068.0], [67.3, 1070.0], [67.4, 1071.0], [67.5, 1073.0], [67.6, 1075.0], [67.7, 1076.0], [67.8, 1077.0], [67.9, 1078.0], [68.0, 1079.0], [68.1, 1080.0], [68.2, 1082.0], [68.3, 1082.0], [68.4, 1083.0], [68.5, 1085.0], [68.6, 1086.0], [68.7, 1087.0], [68.8, 1089.0], [68.9, 1090.0], [69.0, 1091.0], [69.1, 1091.0], [69.2, 1092.0], [69.3, 1093.0], [69.4, 1094.0], [69.5, 1096.0], [69.6, 1097.0], [69.7, 1098.0], [69.8, 1099.0], [69.9, 1102.0], [70.0, 1104.0], [70.1, 1106.0], [70.2, 1107.0], [70.3, 1109.0], [70.4, 1111.0], [70.5, 1112.0], [70.6, 1114.0], [70.7, 1116.0], [70.8, 1118.0], [70.9, 1122.0], [71.0, 1124.0], [71.1, 1126.0], [71.2, 1127.0], [71.3, 1129.0], [71.4, 1133.0], [71.5, 1137.0], [71.6, 1138.0], [71.7, 1140.0], [71.8, 1141.0], [71.9, 1143.0], [72.0, 1146.0], [72.1, 1150.0], [72.2, 1152.0], [72.3, 1155.0], [72.4, 1156.0], [72.5, 1159.0], [72.6, 1162.0], [72.7, 1167.0], [72.8, 1173.0], [72.9, 1179.0], [73.0, 1181.0], [73.1, 1185.0], [73.2, 1188.0], [73.3, 1190.0], [73.4, 1192.0], [73.5, 1193.0], [73.6, 1195.0], [73.7, 1196.0], [73.8, 1199.0], [73.9, 1200.0], [74.0, 1202.0], [74.1, 1205.0], [74.2, 1206.0], [74.3, 1208.0], [74.4, 1210.0], [74.5, 1212.0], [74.6, 1215.0], [74.7, 1217.0], [74.8, 1220.0], [74.9, 1221.0], [75.0, 1222.0], [75.1, 1222.0], [75.2, 1223.0], [75.3, 1225.0], [75.4, 1226.0], [75.5, 1228.0], [75.6, 1230.0], [75.7, 1232.0], [75.8, 1235.0], [75.9, 1237.0], [76.0, 1239.0], [76.1, 1240.0], [76.2, 1242.0], [76.3, 1244.0], [76.4, 1247.0], [76.5, 1250.0], [76.6, 1252.0], [76.7, 1255.0], [76.8, 1256.0], [76.9, 1259.0], [77.0, 1261.0], [77.1, 1264.0], [77.2, 1267.0], [77.3, 1269.0], [77.4, 1270.0], [77.5, 1272.0], [77.6, 1274.0], [77.7, 1278.0], [77.8, 1280.0], [77.9, 1282.0], [78.0, 1284.0], [78.1, 1287.0], [78.2, 1289.0], [78.3, 1293.0], [78.4, 1300.0], [78.5, 1305.0], [78.6, 1312.0], [78.7, 1318.0], [78.8, 1323.0], [78.9, 1330.0], [79.0, 1334.0], [79.1, 1336.0], [79.2, 1339.0], [79.3, 1342.0], [79.4, 1345.0], [79.5, 1347.0], [79.6, 1354.0], [79.7, 1360.0], [79.8, 1363.0], [79.9, 1368.0], [80.0, 1375.0], [80.1, 1385.0], [80.2, 1403.0], [80.3, 1411.0], [80.4, 1439.0], [80.5, 1453.0], [80.6, 1464.0], [80.7, 1479.0], [80.8, 1490.0], [80.9, 1499.0], [81.0, 1507.0], [81.1, 1515.0], [81.2, 1526.0], [81.3, 1538.0], [81.4, 1544.0], [81.5, 1549.0], [81.6, 1554.0], [81.7, 1555.0], [81.8, 1557.0], [81.9, 1560.0], [82.0, 1562.0], [82.1, 1564.0], [82.2, 1566.0], [82.3, 1572.0], [82.4, 1576.0], [82.5, 1582.0], [82.6, 1608.0], [82.7, 1614.0], [82.8, 1618.0], [82.9, 1625.0], [83.0, 1631.0], [83.1, 1634.0], [83.2, 1641.0], [83.3, 1666.0], [83.4, 1681.0], [83.5, 1708.0], [83.6, 1723.0], [83.7, 1727.0], [83.8, 1732.0], [83.9, 1735.0], [84.0, 1739.0], [84.1, 1749.0], [84.2, 1761.0], [84.3, 1777.0], [84.4, 1807.0], [84.5, 1821.0], [84.6, 1830.0], [84.7, 1841.0], [84.8, 1867.0], [84.9, 1874.0], [85.0, 1878.0], [85.1, 1883.0], [85.2, 1887.0], [85.3, 1892.0], [85.4, 1907.0], [85.5, 1918.0], [85.6, 1925.0], [85.7, 1933.0], [85.8, 1951.0], [85.9, 1959.0], [86.0, 1962.0], [86.1, 1966.0], [86.2, 1968.0], [86.3, 1973.0], [86.4, 1977.0], [86.5, 1980.0], [86.6, 1983.0], [86.7, 1986.0], [86.8, 1991.0], [86.9, 1996.0], [87.0, 1998.0], [87.1, 2003.0], [87.2, 2010.0], [87.3, 2022.0], [87.4, 2039.0], [87.5, 2052.0], [87.6, 2058.0], [87.7, 2065.0], [87.8, 2079.0], [87.9, 2087.0], [88.0, 2091.0], [88.1, 2099.0], [88.2, 2106.0], [88.3, 2111.0], [88.4, 2116.0], [88.5, 2120.0], [88.6, 2124.0], [88.7, 2127.0], [88.8, 2133.0], [88.9, 2140.0], [89.0, 2150.0], [89.1, 2161.0], [89.2, 2175.0], [89.3, 2185.0], [89.4, 2215.0], [89.5, 2234.0], [89.6, 2246.0], [89.7, 2260.0], [89.8, 2273.0], [89.9, 2290.0], [90.0, 2304.0], [90.1, 2310.0], [90.2, 2315.0], [90.3, 2322.0], [90.4, 2326.0], [90.5, 2332.0], [90.6, 2337.0], [90.7, 2348.0], [90.8, 2360.0], [90.9, 2367.0], [91.0, 2378.0], [91.1, 2413.0], [91.2, 2427.0], [91.3, 2447.0], [91.4, 2486.0], [91.5, 2494.0], [91.6, 2508.0], [91.7, 2512.0], [91.8, 2522.0], [91.9, 2563.0], [92.0, 2570.0], [92.1, 2636.0], [92.2, 2643.0], [92.3, 2654.0], [92.4, 2674.0], [92.5, 2696.0], [92.6, 2716.0], [92.7, 2724.0], [92.8, 2794.0], [92.9, 2799.0], [93.0, 2803.0], [93.1, 2810.0], [93.2, 2819.0], [93.3, 2828.0], [93.4, 2833.0], [93.5, 2835.0], [93.6, 2838.0], [93.7, 2841.0], [93.8, 2844.0], [93.9, 2849.0], [94.0, 2861.0], [94.1, 2868.0], [94.2, 2875.0], [94.3, 2883.0], [94.4, 2887.0], [94.5, 2899.0], [94.6, 2912.0], [94.7, 2926.0], [94.8, 2939.0], [94.9, 2951.0], [95.0, 2965.0], [95.1, 2970.0], [95.2, 2976.0], [95.3, 2978.0], [95.4, 2983.0], [95.5, 2987.0], [95.6, 2992.0], [95.7, 2999.0], [95.8, 3004.0], [95.9, 3006.0], [96.0, 3009.0], [96.1, 3013.0], [96.2, 3018.0], [96.3, 3025.0], [96.4, 3036.0], [96.5, 3045.0], [96.6, 3049.0], [96.7, 3054.0], [96.8, 3058.0], [96.9, 3063.0], [97.0, 3076.0], [97.1, 3097.0], [97.2, 3104.0], [97.3, 3108.0], [97.4, 3116.0], [97.5, 3120.0], [97.6, 3124.0], [97.7, 3128.0], [97.8, 3134.0], [97.9, 3138.0], [98.0, 3162.0], [98.1, 3189.0], [98.2, 3254.0], [98.3, 3269.0], [98.4, 3286.0], [98.5, 3345.0], [98.6, 3386.0], [98.7, 3394.0], [98.8, 3415.0], [98.9, 3459.0], [99.0, 3473.0], [99.1, 3480.0], [99.2, 3496.0], [99.3, 3590.0], [99.4, 3624.0], [99.5, 3708.0], [99.6, 3877.0], [99.7, 3968.0], [99.8, 3978.0], [99.9, 3998.0], [100.0, 5218.0]], "isOverall": false, "label": "POST Login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1355.0, "series": [{"data": [[0.0, 383.0], [600.0, 1355.0], [700.0, 1106.0], [800.0, 1182.0], [900.0, 1009.0], [1000.0, 931.0], [1100.0, 533.0], [1200.0, 591.0], [1300.0, 237.0], [1400.0, 95.0], [1500.0, 217.0], [100.0, 303.0], [1600.0, 118.0], [1700.0, 116.0], [1800.0, 133.0], [1900.0, 220.0], [2000.0, 138.0], [2100.0, 159.0], [2300.0, 150.0], [2200.0, 80.0], [2400.0, 61.0], [2500.0, 66.0], [2600.0, 62.0], [2800.0, 210.0], [2700.0, 51.0], [2900.0, 157.0], [3000.0, 190.0], [3100.0, 125.0], [200.0, 295.0], [3200.0, 43.0], [3300.0, 42.0], [3400.0, 59.0], [3500.0, 14.0], [3600.0, 24.0], [3700.0, 10.0], [3800.0, 5.0], [3900.0, 38.0], [4000.0, 11.0], [300.0, 688.0], [4900.0, 1.0], [5200.0, 1.0], [400.0, 806.0], [500.0, 1088.0]], "isOverall": false, "label": "POST Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 94.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12332.0, "series": [{"data": [[0.0, 94.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 257.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 420.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 12332.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 48.25925925925923, "minX": 1.78685874E12, "maxY": 197.44138463518186, "series": [{"data": [[1.7868588E12, 191.05591836734655], [1.78685886E12, 197.44138463518186], [1.78685874E12, 48.25925925925923]], "isOverall": false, "label": "Stress Test Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78685886E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 64.57894736842104, "minX": 1.0, "maxY": 2860.0, "series": [{"data": [[2.0, 1342.0], [3.0, 1310.0], [5.0, 1338.0], [6.0, 672.5], [7.0, 1325.0], [8.0, 676.5], [9.0, 649.5], [10.0, 652.0], [11.0, 1468.0], [13.0, 1465.5], [15.0, 1460.5], [16.0, 378.5], [17.0, 1453.0], [18.0, 1451.0], [19.0, 1448.0], [20.0, 248.50000000000003], [21.0, 1441.0], [22.0, 1424.0], [23.0, 1418.0], [24.0, 447.61904761904765], [25.0, 467.3333333333333], [26.0, 95.4090909090909], [27.0, 506.6666666666667], [28.0, 64.57894736842104], [29.0, 140.5], [30.0, 1360.0], [31.0, 1371.0], [33.0, 1369.0], [32.0, 1370.0], [35.0, 1364.0], [34.0, 1367.0], [37.0, 416.8571428571429], [36.0, 1363.0], [39.0, 545.0], [38.0, 1359.0], [40.0, 644.6956521739132], [41.0, 1354.0], [43.0, 1349.0], [42.0, 1351.0], [45.0, 1342.0], [44.0, 1345.0], [46.0, 865.9655172413793], [47.0, 1186.0], [49.0, 1440.5], [48.0, 1335.0], [50.0, 1159.1739130434783], [51.0, 597.5238095238094], [52.0, 698.7368421052631], [54.0, 1118.0], [55.0, 1334.5], [56.0, 2035.3333333333333], [57.0, 1326.0], [58.0, 2860.0], [59.0, 1321.0], [60.0, 2726.131147540982], [61.0, 119.89285714285714], [62.0, 300.5], [63.0, 599.5882352941177], [65.0, 799.5882352941177], [66.0, 786.3333333333331], [67.0, 536.6666666666666], [64.0, 1313.0], [68.0, 313.05660377358487], [69.0, 223.70833333333331], [70.0, 858.8730158730161], [71.0, 1314.0], [72.0, 708.5], [74.0, 802.0], [75.0, 1802.0], [73.0, 1352.0], [78.0, 1276.6666666666667], [79.0, 1313.0], [77.0, 1316.0], [76.0, 1318.0], [81.0, 1222.5], [83.0, 1264.0], [82.0, 1280.0], [80.0, 1304.0], [84.0, 1115.0], [85.0, 663.8], [86.0, 696.2], [87.0, 1254.0], [88.0, 755.0], [91.0, 1242.0], [90.0, 1247.0], [89.0, 1250.0], [92.0, 654.0], [94.0, 872.0], [95.0, 1051.75], [93.0, 1234.0], [96.0, 973.6666666666666], [97.0, 2678.6666666666665], [98.0, 891.1641791044779], [99.0, 1212.0], [101.0, 936.6666666666666], [103.0, 1276.0], [102.0, 1279.0], [100.0, 1190.0], [107.0, 1263.0], [106.0, 1268.0], [105.0, 1271.0], [104.0, 1273.0], [111.0, 967.0624999999999], [110.0, 1255.0], [109.0, 1256.0], [108.0, 1259.0], [115.0, 1249.0], [114.0, 1253.0], [113.0, 1258.0], [112.0, 1249.0], [119.0, 1253.0], [118.0, 1244.0], [117.0, 1232.0], [116.0, 1237.0], [123.0, 1066.0], [122.0, 1237.5], [120.0, 1251.0], [124.0, 1061.0], [126.0, 1056.4444444444443], [127.0, 1052.4615384615383], [135.0, 1142.0], [134.0, 1149.0], [133.0, 1152.0], [131.0, 1141.0], [130.0, 1143.0], [129.0, 1145.0], [128.0, 1151.0], [143.0, 1073.0], [142.0, 1078.0], [141.0, 1081.0], [140.0, 1102.0], [139.0, 1107.0], [138.0, 1111.0], [137.0, 1124.0], [136.0, 1135.0], [150.0, 1248.5], [151.0, 1037.0], [149.0, 1037.5], [147.0, 1051.0], [146.0, 1068.0], [145.0, 1052.0], [144.0, 1068.0], [154.0, 1498.2], [155.0, 1437.0], [156.0, 1512.6666666666667], [159.0, 872.0], [158.0, 861.0], [157.0, 1037.5], [153.0, 1026.0], [152.0, 1029.0], [167.0, 817.0], [166.0, 822.0], [165.0, 837.0], [164.0, 843.0], [163.0, 849.0], [162.0, 856.0], [161.0, 861.0], [160.0, 863.0], [175.0, 788.0], [174.0, 807.0], [173.0, 811.0], [172.0, 802.0], [171.0, 807.5], [169.0, 808.0], [168.0, 811.0], [183.0, 719.0], [182.0, 724.0], [181.0, 711.0], [180.0, 712.0], [179.0, 714.0], [178.0, 764.0], [177.0, 769.0], [176.0, 773.0], [190.0, 1652.0], [191.0, 2272.2857142857147], [189.0, 698.0], [188.0, 703.0], [187.0, 699.0], [186.0, 708.0], [185.0, 710.0], [184.0, 715.0], [192.0, 1919.0], [193.0, 2209.0], [199.0, 610.0], [198.0, 638.0], [196.0, 639.0], [195.0, 636.0], [194.0, 639.0], [200.0, 1073.5192036499407], [1.0, 1314.0]], "isOverall": false, "label": "POST Login", "isController": false}, {"data": [[190.1350835686484, 1061.045104174621]], "isOverall": false, "label": "POST Login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1661.4, "minX": 1.78685874E12, "maxY": 44471.36666666667, "series": [{"data": [[1.7868588E12, 30131.466666666667], [1.78685886E12, 44471.36666666667], [1.78685874E12, 2816.483333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7868588E12, 18881.383333333335], [1.78685886E12, 29942.516666666666], [1.78685874E12, 1661.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78685886E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 694.2291854330186, "minX": 1.78685874E12, "maxY": 1661.3706122449012, "series": [{"data": [[1.7868588E12, 1661.3706122449012], [1.78685886E12, 694.2291854330186], [1.78685874E12, 850.2384259259255]], "isOverall": false, "label": "POST Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78685886E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 694.2204349504563, "minX": 1.78685874E12, "maxY": 1661.3614285714302, "series": [{"data": [[1.7868588E12, 1661.3614285714302], [1.78685886E12, 694.2204349504563], [1.78685874E12, 850.224537037037]], "isOverall": false, "label": "POST Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78685886E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.028439068330973965, "minX": 1.78685874E12, "maxY": 2.085714285714294, "series": [{"data": [[1.7868588E12, 2.085714285714294], [1.78685886E12, 0.028439068330973965], [1.78685874E12, 0.5810185185185184]], "isOverall": false, "label": "POST Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78685886E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.78685874E12, "maxY": 4079.0, "series": [{"data": [[1.7868588E12, 4079.0], [1.78685886E12, 1663.0], [1.78685874E12, 3608.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7868588E12, 3129.2], [1.78685886E12, 1439.0000000000016], [1.78685874E12, 2817.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7868588E12, 3967.62], [1.78685886E12, 1663.0], [1.78685874E12, 3607.97]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7868588E12, 3458.6999999999994], [1.78685886E12, 1573.6], [1.78685874E12, 3141.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7868588E12, 7.0], [1.78685886E12, 181.0], [1.78685874E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7868588E12, 2091.0], [1.78685886E12, 791.0], [1.78685874E12, 600.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78685886E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 3.0, "maxY": 3479.0, "series": [{"data": [[3.0, 2860.0], [5.0, 2401.0], [9.0, 2536.5], [11.0, 3.0], [12.0, 286.0], [15.0, 3479.0], [19.0, 697.0], [21.0, 361.0], [26.0, 371.0], [27.0, 24.5], [28.0, 517.0], [29.0, 3255.0], [30.0, 1508.0], [31.0, 1996.0], [33.0, 788.0], [36.0, 2128.0], [39.0, 1663.0], [41.0, 2704.0], [42.0, 2522.0], [44.0, 3038.0], [47.0, 958.0], [46.0, 2799.0], [48.0, 2801.0], [53.0, 188.0], [55.0, 955.0], [59.0, 3009.0], [63.0, 3054.0], [64.0, 816.5], [71.0, 1998.0], [68.0, 1726.0], [70.0, 1244.0], [74.0, 2884.0], [75.0, 999.0], [79.0, 306.0], [77.0, 2353.5], [76.0, 2856.5], [80.0, 1105.5], [81.0, 680.0], [82.0, 1090.5], [85.0, 3106.5], [88.0, 348.0], [93.0, 822.0], [105.0, 984.0], [114.0, 3129.0], [115.0, 1717.5], [118.0, 2066.0], [128.0, 2076.0], [130.0, 1110.0], [135.0, 891.0], [137.0, 654.0], [142.0, 181.0], [140.0, 305.0], [150.0, 1490.0], [147.0, 918.5], [157.0, 774.0], [160.0, 2279.0], [165.0, 1255.5], [167.0, 852.0], [171.0, 847.5], [169.0, 706.0], [177.0, 645.0], [180.0, 540.0], [186.0, 1053.0], [200.0, 1079.0], [213.0, 1188.0], [208.0, 981.0], [214.0, 1082.0], [232.0, 1533.0], [266.0, 668.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 2388.0], [5.0, 2387.5], [9.0, 2540.0], [11.0, 14.5], [12.0, 303.0], [15.0, 3477.0], [19.0, 928.0], [21.0, 376.0], [26.0, 369.0], [27.0, 15.0], [28.0, 487.0], [29.0, 3247.5], [30.0, 1507.0], [31.0, 1998.0], [33.0, 814.0], [36.0, 2134.0], [39.0, 1671.5], [38.0, 459.0], [41.0, 2654.0], [42.0, 2518.0], [44.0, 2686.0], [47.0, 987.0], [46.0, 2800.0], [48.0, 105.0], [53.0, 554.0], [55.0, 978.0], [59.0, 2802.0], [63.0, 3045.0], [64.0, 762.5], [71.0, 1960.0], [68.0, 1807.0], [70.0, 1253.5], [74.0, 2890.0], [75.0, 988.5], [79.0, 298.0], [77.0, 2317.0], [76.0, 2842.0], [80.0, 975.0], [81.0, 2271.0], [82.0, 795.0], [85.0, 2064.5], [88.0, 368.0], [93.0, 826.0], [105.0, 991.0], [111.0, 596.0], [110.0, 951.0], [114.0, 3127.0], [115.0, 1727.0], [118.0, 1091.0], [119.0, 565.0], [128.0, 2070.5], [130.0, 1096.0], [135.0, 893.5], [137.0, 665.5], [139.0, 970.5], [142.0, 360.0], [141.0, 527.0], [140.0, 504.0], [150.0, 1498.0], [147.0, 929.0], [144.0, 674.0], [157.0, 1037.0], [160.0, 979.5], [165.0, 1160.0], [167.0, 879.0], [166.0, 301.5], [171.0, 852.0], [169.0, 709.0], [172.0, 699.0], [177.0, 642.0], [180.0, 507.0], [179.0, 482.0], [186.0, 986.0], [193.0, 646.0], [200.0, 852.0], [213.0, 1194.0], [208.0, 962.5], [214.0, 1025.0], [212.0, 593.0], [227.0, 712.0], [232.0, 1556.0], [234.0, 653.5], [247.0, 932.0], [250.0, 624.0], [266.0, 620.0], [257.0, 581.0], [292.0, 919.5], [325.0, 290.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 325.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 3.0, "maxY": 3479.0, "series": [{"data": [[3.0, 2860.0], [5.0, 2401.0], [9.0, 2536.5], [11.0, 3.0], [12.0, 286.0], [15.0, 3479.0], [19.0, 697.0], [21.0, 361.0], [26.0, 371.0], [27.0, 24.5], [28.0, 516.0], [29.0, 3255.0], [30.0, 1508.0], [31.0, 1996.0], [33.0, 788.0], [36.0, 2128.0], [39.0, 1663.0], [41.0, 2704.0], [42.0, 2522.0], [44.0, 3038.0], [47.0, 958.0], [46.0, 2799.0], [48.0, 2801.0], [53.0, 188.0], [55.0, 955.0], [59.0, 3009.0], [63.0, 3054.0], [64.0, 816.5], [71.0, 1998.0], [68.0, 1726.0], [70.0, 1244.0], [74.0, 2884.0], [75.0, 999.0], [79.0, 306.0], [77.0, 2353.5], [76.0, 2856.0], [80.0, 1105.5], [81.0, 680.0], [82.0, 1090.5], [85.0, 3106.5], [88.0, 348.0], [93.0, 822.0], [105.0, 984.0], [114.0, 3129.0], [115.0, 1717.5], [118.0, 2066.0], [128.0, 2076.0], [130.0, 1110.0], [135.0, 891.0], [137.0, 654.0], [142.0, 181.0], [140.0, 305.0], [150.0, 1490.0], [147.0, 918.5], [157.0, 774.0], [160.0, 2279.0], [165.0, 1255.5], [167.0, 852.0], [171.0, 847.5], [169.0, 706.0], [177.0, 645.0], [180.0, 540.0], [186.0, 1053.0], [200.0, 1079.0], [213.0, 1188.0], [208.0, 981.0], [214.0, 1082.0], [232.0, 1533.0], [266.0, 668.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 2388.0], [5.0, 2387.5], [9.0, 2540.0], [11.0, 14.5], [12.0, 303.0], [15.0, 3477.0], [19.0, 928.0], [21.0, 376.0], [26.0, 369.0], [27.0, 15.0], [28.0, 487.0], [29.0, 3247.5], [30.0, 1507.0], [31.0, 1998.0], [33.0, 814.0], [36.0, 2134.0], [39.0, 1671.5], [38.0, 459.0], [41.0, 2654.0], [42.0, 2518.0], [44.0, 2686.0], [47.0, 987.0], [46.0, 2800.0], [48.0, 105.0], [53.0, 554.0], [55.0, 978.0], [59.0, 2802.0], [63.0, 3045.0], [64.0, 762.5], [71.0, 1959.5], [68.0, 1807.0], [70.0, 1253.5], [74.0, 2890.0], [75.0, 988.5], [79.0, 298.0], [77.0, 2317.0], [76.0, 2842.0], [80.0, 975.0], [81.0, 2271.0], [82.0, 795.0], [85.0, 2064.5], [88.0, 368.0], [93.0, 826.0], [105.0, 991.0], [111.0, 596.0], [110.0, 951.0], [114.0, 3127.0], [115.0, 1727.0], [118.0, 1091.0], [119.0, 565.0], [128.0, 2070.5], [130.0, 1096.0], [135.0, 893.5], [137.0, 665.0], [139.0, 970.5], [142.0, 360.0], [141.0, 527.0], [140.0, 504.0], [150.0, 1498.0], [147.0, 929.0], [144.0, 674.0], [157.0, 1037.0], [160.0, 979.5], [165.0, 1160.0], [167.0, 879.0], [166.0, 301.5], [171.0, 852.0], [169.0, 709.0], [172.0, 699.0], [177.0, 642.0], [180.0, 507.0], [179.0, 482.0], [186.0, 986.0], [193.0, 646.0], [200.0, 852.0], [213.0, 1194.0], [208.0, 962.5], [214.0, 1025.0], [212.0, 593.0], [227.0, 712.0], [232.0, 1556.0], [234.0, 653.5], [247.0, 932.0], [250.0, 624.0], [266.0, 620.0], [257.0, 581.0], [292.0, 919.5], [325.0, 290.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 325.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.483333333333333, "minX": 1.78685874E12, "maxY": 128.63333333333333, "series": [{"data": [[1.7868588E12, 82.26666666666667], [1.78685886E12, 128.63333333333333], [1.78685874E12, 7.483333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78685886E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78685874E12, "maxY": 125.95, "series": [{"data": [[1.7868588E12, 10.3], [1.78685886E12, 0.85], [1.78685874E12, 1.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7868588E12, 31.0], [1.78685886E12, 2.716666666666667], [1.78685874E12, 5.333333333333333]], "isOverall": false, "label": "401", "isController": false}, {"data": [[1.7868588E12, 40.36666666666667], [1.78685886E12, 125.95], [1.78685874E12, 0.16666666666666666]], "isOverall": false, "label": "403", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78685886E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.85, "minX": 1.78685874E12, "maxY": 128.66666666666666, "series": [{"data": [[1.7868588E12, 10.3], [1.78685886E12, 0.85], [1.78685874E12, 1.7]], "isOverall": false, "label": "POST Login-success", "isController": false}, {"data": [[1.7868588E12, 71.36666666666666], [1.78685886E12, 128.66666666666666], [1.78685874E12, 5.5]], "isOverall": false, "label": "POST Login-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78685886E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.85, "minX": 1.78685874E12, "maxY": 128.66666666666666, "series": [{"data": [[1.7868588E12, 10.3], [1.78685886E12, 0.85], [1.78685874E12, 1.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7868588E12, 71.36666666666666], [1.78685886E12, 128.66666666666666], [1.78685874E12, 5.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78685886E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

