import { useState, useEffect } from "react";

function Page() {
	let pageIndex = 0;
	let data;

	const [pageView, setPageView] = useState(<div/>);

	async function updatePage()
	{
		let response = await fetch("/api/page/" + pageIndex);
		data = await response.json();
		console.log(data);
		const articles = data.map((val) =>
		{
			return (
				<div className="article">
					<h2><a href={val.link}>{val.title}</a></h2>
					<p>{val.content}</p>
				</div>
			);
		});
		let result = <div className="article-list">{articles}</div>
		setPageView(result);
	}

	useEffect(() =>
	{
		updatePage();
	}, []);

	return (
		<div>
			{pageView}
		</div>
	)
}

export default Page;