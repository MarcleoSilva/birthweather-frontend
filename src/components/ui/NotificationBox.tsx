export default function NotificationBox(
    {visible, text}:
    {visible:boolean, text: string}) {
        if (!visible) {
            return <></>;
        }

        return (
            <div className="absolute grid justify-baseline right-5 bottom-5
            border-yellow-300 border-2 rounded-2xl p-3 bg-yellow-100
            text-left text-[14px] text-yellow-800">
                <h1 className="font-(family-name:--primary-font) bold">Notification:</h1>
                <p className="font-(family-name:--secondary-font)">{text}</p>
            </div>
        )
    }
