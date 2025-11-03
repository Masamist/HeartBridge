import { getFamilyMembers, getFamilyDiaryPosts } from '../api/family';

const loadFamilyData = async (familyId) => {

  const membersResult = await getFamilyMembers(familyId);
  if (membersResult.status) console.log('Members:', membersResult.data);

  const postsResult = await getFamilyDiaryPosts(familyId);
  if (postsResult.status) console.log('Diary Posts:', postsResult.data);
};

export default loadFamilyData;