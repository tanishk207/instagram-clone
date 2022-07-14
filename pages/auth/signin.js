import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function SignIn({ providers }) {
    return (
        <div>
            <Header />
            <div className="mt-40 grid place-items-center">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
                <p className="font-xs italic">
                    This is not a REAL app, it is built for educational purposes only.
                </p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}