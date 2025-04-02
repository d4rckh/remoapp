import {Progress} from "@/components/ui/progress";

export default function Home() {
    return (
        <div className="bg-[url('/wallpaper.png')] bg-cover bg-center flex flex-col items-center justify-center h-screen p-4">
                <div className={"text-7xl text-center text-carnaval mb-10 font-black"}>
                    <p>Progresul donaţiilor</p>
                </div>
                <div>
                    <Progress value={10} className={"h-15 w-[700px]"} />
                </div>
                <div className={"font-bold mt-3 text-xl"}>
                    0 RON / 8000 RON
                </div>
        </div>
    );
}
