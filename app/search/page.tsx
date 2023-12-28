import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type SearchParams = {
    url: URL;
    group_adults: string;
    group_children: string; no_rooms: string;
    checkin: string;
    checkout: string;
};

type Props = {
    searchParams: SearchParams;
};

const SearchPage = async ({ searchParams }: Props) => {

    if (!searchParams.url) return notFound();

    const results = await fetchResults(searchParams)

    if (!results) return <div>No results...</div>

    return (
        <div>SearchPage</div>
    )
}

export default SearchPage;