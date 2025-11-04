import { Button } from "@/components/ui/button";
import Modal, { ModalProps } from "@/components/ui/modal-spring";
import { CircleQuestionMark } from "lucide-react";
import { toast } from "sonner";

interface Props extends ModalProps {}
export default function DataConfirmation({ open, onClose }: Props) {
    
    const onSubmit = () => {
        onClose(false)

        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

        toast.promise(promise, {
            loading: 'Submitting data...',
            success: () => "Data has been submitted.",
            position: "top-right",
        })
    }

    return (
        <Modal open={open} onClose={onClose} maxWidth="lg">
            <div className="flex gap-3">
                <div className="">
                    <div className="flex-center bg-primary/10 text-primary p-2.5 rounded-full">
                        <CircleQuestionMark className="size-5" />
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-xl my-1.5">Confirm Data Submission to CHO?</div>
                    <div className="text-muted-foreground">
                        You are about to submit vaccination data to City Health Office. You confirm that the data are correct and is ready for submission.
                    </div>

                    <div className="mt-6 flex items-center gap-3 justify-end">
                        <Button variant="outline" onClick={() => onClose(false)}>Cancel Submission</Button>
                        <Button onClick={onSubmit}>Yes, Submit</Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}