import { Mail, Plus, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({}: ConfirmTripModalProps) {
    return (
        // closeConfirmTripModal, createTrip
        <h2>a</h2>
    );
}
