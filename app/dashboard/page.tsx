import DiaryForm from "@/components/dashboard/DiaryForm";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const page = (): React.ReactNode => {
  return (
    <Wrapper title="My Diary">
      <DiaryForm />
    </Wrapper>
  );
};

export default page;
