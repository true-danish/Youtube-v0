import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = ({ data }) => {
  return (
    <div className=" flex gap-4 ">
      <FontAwesomeIcon
        icon={faUser}
        size="lg"
        className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full"
      />

      <div>
        <h1>{data.name}</h1>
        <p>{data.comment}</p>
        <div>
          <h1 className="text-sm">Reply</h1>
          <div className="border-l border-l-black ">
            <CommentList listData={data.replies} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ listData }) => {
  return (
    <div className="">
      {listData &&
        listData.map((c) => <Comment key={crypto.randomUUID()} data={c} />)}
    </div>
  );
};

const CommentSection = () => {
  const commentsData = [
    {
      name: "Gullu",
      comment: "my name is gullu",
      replies: [
        {
          name: "Pappu",
          comment: "very good ",
          replies: [],
        },
        {
          name: "Anurag",
          comment: "wow",
          replies: [],
        },
        {
          name: "Badshah",
          comment: "my name is khan",
          replies: [
            {
              name: "Groot",
              comment: "I am groot",
              replies: [
                {
                  name: "Groot",
                  comment: "I am groot",
                  replies: [],
                },
                {
                  name: "Groot",
                  comment: "I am groot",
                  replies: [
                    {
                      name: "Groot",
                      comment: "I am groot",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Xavier",
              comment: "i am under water",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "John Cena",
      comment: "Nice Video. I am loving it",
      replies: [
        {
          name: "Rock",
          comment: "Ching chong ding dong aa eee",
          replies: [],
        },
      ],
    },
    {
      name: "Aishwariya",
      comment: "I dont like this video",
      replies: [
        {
          name: "Vivek ",
          comment: "Yeah me too.",
          replies: [],
        },
        {
          name: "Salman",
          comment: "Mai aa jau kya apni pe.",
          replies: [],
        },
      ],
    },
    {
      name: "Groot ",
      comment: "I am Groot",
      replies: [],
    },
    {
      name: "Groot",
      comment: "I am Groot",
      replies: [],
    },
  ];
  return (
    <section className="bg-red- py-4 px-2 overflow-x-scroll ">
      <h1 className="font-bold text-2xl my-6">Comments:</h1>
      <CommentList listData={commentsData} />
    </section>
  );
};

export default CommentSection;
