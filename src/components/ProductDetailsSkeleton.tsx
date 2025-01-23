import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function ProductDetailsSkeleton() {
  return (
    // <div className="flex flex-wrap justify-center gap-x-4 my-5 lg:w-3/4 m-auto">
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" width={300} height={150} />
      <Skeleton width={250} height={100} />
      <Skeleton width={220} height={80} />
      <Skeleton width={190} height={60} />
    </Box>
    //  </div>
  );
}
export default ProductDetailsSkeleton;
