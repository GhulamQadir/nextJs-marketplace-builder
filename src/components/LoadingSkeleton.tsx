import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function LoadingSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 my-5 lg:w-3/4 m-auto">
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={230} height={118} />
        <Skeleton width={190} />
        <Skeleton width={170} />
        <Skeleton width={140} />
      </Box>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={230} height={118} />
        <Skeleton width={190} />
        <Skeleton width={170} />
        <Skeleton width={140} />
      </Box>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={230} height={118} />
        <Skeleton width={190} />
        <Skeleton width={170} />
        <Skeleton width={140} />
      </Box>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={230} height={118} />
        <Skeleton width={190} />
        <Skeleton width={170} />
        <Skeleton width={140} />
      </Box>
    </div>
  );
}
export default LoadingSkeleton;
