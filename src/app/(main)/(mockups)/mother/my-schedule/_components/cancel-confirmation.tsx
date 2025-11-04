import { Button } from "@/components/ui/button";
import Modal, { ModalProps } from "@/components/ui/modal-spring";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Props = ModalProps;
export default function CancelConfirmation({ open, onClose }: Props) {
    

    return (
        <Modal open={open} onClose={onClose}>
            <div className="">
                <div className="text-base font-medium">
                    Please indicate the reason why your child cannot attend the immunization.
                </div>

                <Textarea className="mt-6" placeholder="State your reason..." />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <Button variant={"secondary"} onClick={() => onClose(false)}>Cancel</Button>
                <Button onClick={() => {
                    onClose(false)
                    toast.success("You have successfully canceled the immunization appointment.")
                }}>
                    Submit Reason
                </Button>
            </div>
        </Modal>
    );
}
