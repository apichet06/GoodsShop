
interface Props {
    id: string;
}

export default function Page({ params }: { params: Props }) {

    return (
        <div>Page Test: {params.id}</div>
    );
}
