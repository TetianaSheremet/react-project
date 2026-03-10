import { Star } from "lucide-react";

interface StarProps {
    rating: number;
}

export const StarsRating = ({ rating }: StarProps) => {
    const stars = rating / 2;

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(5)].map((_, index) => {
                const fill = index + 1 <= stars;

                return (
                    <Star
                        key={index}
                        size={18}
                        fill={fill ? "#f5c518" : "none"}
                        stroke="#f5c518"
                    />
                );
            })}
        </div>
    );
};
