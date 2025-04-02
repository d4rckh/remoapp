import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default async function Manager() {
    return <div className={"max-w-md mx-auto mt-10"}>

        <p className={"text-xl"}>Stand: (nume stand)</p>
        <p className={"text-xl"}>Voluntar: (nume voluntar)</p>

        <form className={"flex gap-2 flex-col mt-2"}>

            <Input type={"number"} placeholder={"Sumă de bani"}/>

            <Button>Trimite</Button>
        </form>

    </div>
}