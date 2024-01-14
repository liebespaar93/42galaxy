type HoverProps = {
    children: React.ReactNode
    setHover: React.Dispatch<React.SetStateAction<boolean>>
}

function MyHover({ children, setHover }: HoverProps) {
    function hoverOn() {
        setHover(true)
    }
    function hoverOff() {
        setHover(false)
    }

    return (
        <>
            <group onPointerOver={hoverOn} onPointerOut={hoverOff}>
                {children}
            </group>
        </>
    )
}

export default MyHover;