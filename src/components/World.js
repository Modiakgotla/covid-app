

function worldStats(props) {
    return (
<div>

<h1>Covid-19 Tracker</h1>

<div className="worldstats">

<div>
<h2>{props.world.TotalConfirmed}</h2>
<small>Total Confirmed</small>
</div>

<div>
    <h2>{props.world.TotalDeaths}</h2>
    <small>Total Deaths</small>
</div>
<div>
    <h2>{props.world.NewConfirmed}</h2>
    <small>New Cases</small>
</div>
<div>
    <h2>{props.world.TotalConfirmed - props.world.TotalDeaths}</h2>
    <small>Total Deaths</small>
</div>

</div>


</div>

    );
}

export default worldStats;