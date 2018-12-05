import Head from "next/head";
import PostLink from "../components/PostLink";
import withLayout from "../lib/withLayout";


const Index = () => (
    <div>
        <Head>
            <title>Home | Nomad Store</title>
        </Head>
        <h1>Hello from the index</h1>{" "}
        <ul>
            <li>
                <PostLink title={"something"}>
                </PostLink>
            </li>
            <li>
                <PostLink title={"somethingElse"}>
                </PostLink>
            </li>
        </ul>
    </div>
);

export default withLayout(Index);