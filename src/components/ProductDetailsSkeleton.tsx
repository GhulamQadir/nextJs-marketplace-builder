import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function ProductDetailsSkeleton() {
  return (
    <div className="ml-6">
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={400} height={150} />
        <Skeleton width={350} height={100} />
        <Skeleton width={300} height={80} />
        <Skeleton width={200} height={60} />
      </Box>
    </div>
  );
}
export default ProductDetailsSkeleton;
