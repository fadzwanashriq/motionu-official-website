export default function News({params}) {
    console.log(params.slug)
    return (
        <>
            {params.slug}
        </>
    )
}