/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	colors: ['#00a06e', '#f9892e', '#b830b3', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 500, 500],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(240, 240, 255)']
			]
		}
,
		borderWidth: 1,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotShadow: true,
		plotBorderWidth: 1
	},
	title: {
		style: { 
			color: '#545454',
			font: 'normal 14px arial, Verdana, sans-serif'
		}
	},
	subtitle: {
		style: { 
			color: '#fff',
			font: 'normal 12px arial, Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#ddd',
		tickColor: '#ddd',
		labels: {
			style: {
				color: '#545454',
				font: '12px arial, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'normal',
				fontSize: '12px',
				fontFamily: 'arial, Verdana, sans-serif'

			}				
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		lineColor: '#ddd',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#ddd',
		labels: {
			style: {
				color: '#545454',
				font: '12px arial, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'normal',
				fontSize: '12px',
				fontFamily: 'arial, Verdana, sans-serif'
			}				
		}
	},
	legend: {
		itemStyle: {			
			font: '12px arial, Verdana, sans-serif',
			color: '#545454'

		},
		itemHoverStyle: {
			color: '#21a27a'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#545454'
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
	
