function temanYangMungkinMengambilKue() {
  var arrivalOrder = ['Aloy', 'Eula', 'Zhongli', 'Diluc'];

  var isCakeIntactWhenZhongliArrives = true;

  for (var i = 0; i < arrivalOrder.length; i++) {
    var friend = arrivalOrder[i];

    if ((friend === 'Aloy' || friend === 'Zhongli') && isCakeIntactWhenZhongliArrives) {
      console.log(friend + ' yang paling mungkin mengambil kue!');
      break;
    } else if (friend === 'Eula') {
      console.log(friend + ' yang paling mungkin mengambil kue!');
      break;
    } else if (friend === 'Diluc' && !isCakeIntactWhenZhongliArrives) {
      console.log(friend + ' yang paling mungkin mengambil kue!');
      break;
    }
  }
}

temanYangMungkinMengambilKue();
