function Output() {
	
	//ターゲット
	var text = "L71EQS78EVNX85HG95UJZ73VNW83UAG95UJS78EVYP79YJF84AG95UJNX85HS78EVZ73VNB88UQNZ46LP76XBZ73VNS78EVNX85HB88UQG95UJZ73VNW83UAG95UJS78EVYP79YJF84AG95UJNX85HS78EVZ73VNB88UQNZ46L";

	var map = new Object();
	map['G95UJ'] = '_';
	map['G65WM'] = 'A';
	map['TD66F'] = 'B';
	map['YE67C'] = 'C';
	map['B68EQ'] = 'D';
	map['EV69S'] = 'E';
	map['SN70J'] = 'F';
	map['L71EQ'] = 'G';
	map['PT72Y'] = 'H';
	map['Z73VN'] = 'I';
	map['X74YS'] = 'J';
	map['TE75H'] = 'K';
	map['P76XB'] = 'L';
	map['PD77Q'] = 'M';
	map['S78EV'] = 'N';
	map['YP79Y'] = 'O';
	map['E80PS'] = 'P';
	map['U81ZX'] = 'Q';
	map['EW82Q'] = 'R';
	map['W83UA'] = 'S';
	map['JF84A'] = 'T';
	map['NX85H'] = 'U';
	map['Q86ZR'] = 'V';
	map['L87RU'] = 'W';
	map['B88UQ'] = 'X';
	map['C89TW'] = 'Y';
	map['XF90P'] = 'Z';
	map['NZ46L'] = '.';

	for ( var key in map) {
		var p = new RegExp(key, 'g');
		if (text.match(p)) {
			text = text.replace(p, map[key]);			
		}
	}
	
	document.write(text);
}