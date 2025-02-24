import { useState, useEffect } from "react";
import "./page.css"
import "./main.css"

function Page() {
	let data;

	const [pageView, setPageView] = useState(<div/>);
	const [pageIndex, setPageIndex] = useState(0);

	async function updatePage(index)
	{
		let response = await fetch("/api/page/" + index);
		data = await response.json();
		console.log(data);
		const articles = data.map((val) =>
		{
			return (
				<div className="article">
					<h2><a href={val.link}>{val.title}</a></h2>
					<p><i>{val.creation_date}</i></p>
					<p>{val.content}</p>
				</div>
			);
		});
		let result = <div className="article-list">{articles}</div>
		setPageView(result);
	}

	function nextPage()
	{
		let index = pageIndex + 1
		setPageIndex(index);
		setPageView(<div>Loading...</div>)
		updatePage(index);
	}
	function previousPage()
	{
		let index = pageIndex - 1
		setPageIndex(index);
		setPageView(<div>Loading...</div>)
		updatePage(index);
	}

	useEffect(() =>
	{
		updatePage(pageIndex);
	}, []);

	return (
		<div>
			<header>
				<p><b>Current Page: </b>{pageIndex}</p>
				<button onClick={previousPage}>Previous</button>
				<button onClick={nextPage}>Next</button>
			</header>
			<br/>
			{pageView}
		</div>
	)
}

export default Page;