const useAvailability = (item) => {
  return (
    <>
      {item?.available === true ? (
        <>{item?.product} is available</>
      ) : (
        <>{item?.product} is not available</>
      )}
    </>
  );
};

export default useAvailability;
