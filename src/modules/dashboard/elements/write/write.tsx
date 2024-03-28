"use client";

import { deleteEmail } from "@/actions/delete.email";
import { getEmails } from "@/actions/get.emails";
// import { deleteEmail } from "@/actions/delete.email";
// import { getEmails } from "@/actions/get.emails";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user } = useClerk();

  const handleCreate = (e: any) => {
    e.preventDefault();
    if (emailTitle.length === 0) {
      toast.error("Enter the email subject to continue!");
    } else {
      const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  };

  useEffect(() => {
    FindEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const FindEmails = async () => {
    
    await getEmails({ newsLetterOwnerId: user?.id! })
      .then((res: any) => {
        setEmails(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const deleteHanlder = async (id: string) => {
    await deleteEmail({ emailId: id }).then((res) => {
      toast.success("Successfuly Deleted");
      FindEmails();
    });
  };

  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <div
        className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
        <h5 className="text-2xl">Create New</h5>
      </div>

      {/* saved emails */}
      {emails &&
        emails.map((item: any) => {
          const formattedTitle = item?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");
          return (
            <div
              key={item?._id}
              className="w-[200px] h-[200px] z-[0] relative bg-slate-50 hover:bg-slate-100 flex flex-col items-center justify-center rounded border cursor-pointer"
            >
              <button
                className="absolute flex justify-center z-20 right-2 top-2 hover:text-slate-600   text-2xl cursor-pointer"
                onClick={() => deleteHanlder(item?._id)}
              >
                {ICONS.delete}
              </button>
              <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-xl"
              >
                {item?.title}
              </Link>
            </div>
          );
        })}

      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-[calc(100vw-300px)]">
          <div className="w-[600px] p-5 bg-white rounded shadow relative">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>
            <h5 className="text-2xl">Enter your Email subject</h5>
            <form onSubmit={handleCreate}>
              <input
                type="text"
                name=""
                autoFocus
                className="border w-full my-2 h-[35px] px-2 outline-none"
                value={emailTitle}
                onChange={(e) => setEmailTitle(e.target.value)}
              />
              <Button
                type="submit"
                color="primary"
                className="rounded text-xl mt-3"
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;
