interface GenreProps {
    name: string;
}

export const GenreBadge = ({ name }: GenreProps) => {
    return (
        <span
            style={{
                padding: "4px 8px",
                background: "#f8f8f8",
                borderRadius: "12px",
                fontSize: "12px"
            }}
        >
            {name}
        </span>
    );
};
