import data from '../data.json'

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
  
  // const colorMap = {
  //   'January': '#206AA2',
  //   'February': '#DFE9F2',
  //   'March': '#DFE9F2',
  //   'April': '#DFE9F2',
  //   'May': '#DFE9F2',
  //   'June': '#DFE9F2'
  // }

  const more = data.reduce((acc, value) => {
    return {...acc, [value.month]: '#DFE9F2'};
  })
  const fin = {...more, 'January': '#206AA2'}
  const colors = data.map(x => fin[x.month]);
  
  export const dataStyling = {
    labels: data.map(x => x.month),
    datasets: [
      {
        label: 'Total value',
        data: data.map(x => x["Total value"]),
        backgroundColor: colors,
        borderRadius: 5,
        barThickness: 20
      }
    ],
  };