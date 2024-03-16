// Initializing DataFrame variable
var df = []

// Plot style
var headerStyle = {
   align: "center",
   fill: { color: ["gray"] },
   font: { family: "Arial", size: 15, color: "white" },
   columnwidth: 200
 };
var cellStyle = {
   align: ["center"],
   line: { color: "black", width: 1 },
 };

// Loading the dataset




function add_column(){

  df.addColumn("year_added", df['date_added'].dt.year(), { inplace: true });

  // Plot
  df.plot("content_year").table({
    config: {
      tableHeaderStyle: headerStyle,
      tableCellStyle: cellStyle,
    },
    layout: {
      title: "Added 'year_added' column",
    },
  });
}

function content_type_plot(){

  // Plot
  df['type'].valueCounts().plot("content_type_bar_plot").pie({
    layout: {
      title: "Plot of Size of objects in inventory",
    },
  });
}

function handle_null(){
  let df_country = df["country"].valueCounts().sortValues({ascending: false})
  let values = [df_country['index'][0], "Unknown", "Unknown"]
  df = df.fillNa(values, { columns: ["country", "sales", "timeops"] })
  df.dropNa({ axis: 1, inplace: true })

  let df_null = df.isNa().sum({axis: 0})
  const div = document.getElementById('no_null');
  div.innerHTML = String(df_null);
}

function content_growth(){

  // Grouping data
  let grp = df.groupby(["year_added", "type"])
  let grp_count = grp.col(["type"]).count()


  let large = grp_count.query(grp_count["type"].str.includes("large"))
  let small = grp_count.query(grp_count["type"].str.includes("small"))



  let merge_df = dfd.merge({ left: small, right: large, on: ["year_added"], how: "outer"})
  merge_df.setIndex({column: "year_added", inplace: true})
  merge_df = merge_df.rename({ type_count: "small", type_count_1: "large" })
  merge_df = merge_df.fillNa(0, { columns: ["large"] })

  // Plot
  merge_df.plot("line_chart").line({
    config: {
      columns: ["small", "large"]
    },
    layout: {
      title: "Line chart showing the growth in content over the years",
      xaxis: {
        title: 'Years'
      },
      yaxis: {
        title: 'Count of the content'
      }
    },
  });
}
function fetch_top_10(){

  // Reset index to ensure consistent indexing
  df.resetIndex({ inplace: true })

  // Filter data for small, large, and medium categories
  let small = df.query(df["type"].str.includes("small"))
  let large = df.query(df["type"].str.includes("large"))
  let medium = df.query(df["type"].str.includes("medium"))

  small.sortValues("release_year", {inplace: true})
  small.resetIndex({ inplace: true })

  large.sortValues("release_year", {inplace: true})
  large.resetIndex({ inplace: true })

  medium.sortValues("release_year", {inplace: true})
  medium.resetIndex({ inplace: true })

  let div1 = document.getElementById('small');
  div1.innerHTML = String(small.loc({columns: ['title','release_year']}));

  // Display top large items
  let div2 = document.getElementById('large');
  div2.innerHTML = String(large.loc({columns: ['title','release_year']}));

  let div3 = document.getElementById('medium');
  div3.innerHTML = String(medium.loc({columns: ['title','release_year']}));

}



dfd.readCSV("https://raw.githubusercontent.com/anmol5936/website-1/main/data.csv")
  .then(data => {

   df = data


   handle_null();

   content_type_plot();
   content_growth();
   fetch_top_10();
   plot_durations();
   plot_ratings();

  }).catch(err=>{
     console.log(err);
});