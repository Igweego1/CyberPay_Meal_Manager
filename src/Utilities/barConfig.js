import data from './data.json'

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    }
  };
  
  export const dataStyling = {
    labels: data.map(x => x.month),
    datasets: [
      {
        label: 'Total value',
        data: data.map(x => x["Total value"]),
        backgroundColor: '#DFE9F2',
        hoverBackgroundColor: '#206AA2',
        borderRadius: 15,
        barThickness: 18
      }
    ],
  };