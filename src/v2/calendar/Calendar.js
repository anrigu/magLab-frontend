import CalendarHeatmap from 'reactjs-calendar-heatmap';
import * as d3 from 'd3';
import * as moment from "moment";

let now = moment().endOf('day').add(6, 'month').toDate()
let time_ago = moment().startOf('day').subtract(12, 'year').toDate()
let data = d3.timeDays(time_ago, now).map(function (dateElement, index) {
    return {
        date: dateElement,
        details: Array.apply(null, new Array(Math.floor(Math.random() * 30))).map(function (e, i, arr) {
            return {
                'name': 'Project ' + Math.ceil(Math.random() * 10),
                'date': function () {
                    let projectDate = new Date(dateElement.getTime())
                    projectDate.setHours(Math.floor(Math.random() * 24))
                    projectDate.setMinutes(Math.floor(Math.random() * 60))
                    return projectDate
                }(),
                'value': 3600 * ((arr.length - i) / 5) + Math.floor(Math.random() * 3600) * Math.round(Math.random() * (index / 365))
            }
        }),
        init: function () {
            this.total = this.details.reduce(function (prev, e) {
                return prev + e.value
            }, 0)
            return this
        }
    }.init()
})

const state = {
    data: data,
    color: '#cd2327',
    overview: 'year',
}

function print(val) {
    console.log(val)
}

export default function Calendar() {
    return (
        <CalendarHeatmap
            data={state.data}
            color={state.color}
            overview={state.overview}
            handler={print}>
        </CalendarHeatmap>
    )
}