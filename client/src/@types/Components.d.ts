type TextProps = {
    text: string;
}

type ButtonProps = {
    buttonText: string;
    destination: string;
}

type ModalProps = {
    open: boolean;
    close: () => void | undefined;
}