import { CircleAlert, LoaderCircle } from "lucide-react";
import Modal, { ModalProps } from "./ui/modal-spring";
import { Button } from "./ui/button";

type Props = ModalProps & {
    message?: string | React.ReactNode;
    deleteItem?: string;
    processing?: boolean;
    onDelete: CallableFunction
}
export default function DeleteConfirmation({ open, message, deleteItem, processing, onClose, onDelete }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex gap-3">
                <div className="">
                    <div className="flex-center bg-destructive/10 text-destructive p-2.5 rounded-full">
                        <CircleAlert className="size-5" />
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-xl my-1.5">Are you sure?</div>
                    <div className="font-googlesanstext">
                        {message??(
                            <div className="text-muted-foreground">
                                You are about to delete <span className="font-medium text-foreground">{deleteItem}</span>? <br />
                                All data associated with this will be deleted. <br />
                                This cannot be undone.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-y-center mt-5 justify-end gap-3">
                <Button variant="outline" disabled={processing} onClick={() => onClose(false)}>
                    Cancel
                </Button>
                <Button variant="destructive" disabled={processing} onClick={() => onDelete()}>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Yes, delete
                </Button>
            </div>
        </Modal>
    )
}